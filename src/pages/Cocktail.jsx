import React from 'react'
import { useLoaderData, Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';

const singleDrinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import { useQuery } from '@tanstack/react-query';

const singleDrinkQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async()=> {
        const { data } = await axios.get(`${singleDrinkUrl}${id}`);
        return data;
    }
  }
}

export const loader = (queryClient) => async ({params})=> {
  const {id} = params
  await queryClient.ensureQueryData(singleDrinkQuery(id))
  return {id}
}

const Cocktail = () => {
  const {id} =  useLoaderData()
  const { data } = useQuery(singleDrinkQuery(id));

  if(!data) return <Navigate to='/' />
  const unitDrink = data.drinks[0];
  const {strDrink: name, strDrinkThumb:img, strAlcoholic: alcoholic, strCategory: category, strGlass: glass, strInstructions:instructions} = unitDrink;

  const validIngredients = Object.keys(unitDrink).filter((key)=> key.startsWith('strIngredient') && unitDrink[key] !== null).map((key)=> unitDrink[key])


  return (
    <Wrapper>
      <header>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={img} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">alcholic: </span>
            {alcoholic}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ingredient" key={index}>
                  {item} {index < validIngredients.length - 1 && ','}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instruction: </span>
            {instructions}
          </p>
        </div>
        <div className="link-container">
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  header h3 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 3rem;
  }
  footer {
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .img {
    border-radius: var(--borderRadius);
    margin-bottom: 1rem;
    max-width: 600px;
  }
  .drinks-info {
    padding-top: 2rem;
  }
  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    background: rgba(142, 69, 133, 0.2);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);

    letter-spacing: var(--letterSpacing);
  }
  .ingredient {
    display: inline-block;
    margin-right: 0.5rem;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 3rem;
    align-items: center;
  }
  .drink-info {
    padding-top: 0;
  }
  .link-container {
    display: flex;
    justify-content: center;
  }
`;

export default Cocktail

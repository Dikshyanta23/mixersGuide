import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Card = ({id, name, image, alcoholic, glass}) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{alcoholic}</p>
        <Link to={`/cocktail/${id}`} className='btn'>View more</Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  background: white;
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
  :hover {
    box-shadow: var(--shadow-3);
  }
  img {
    height: 15rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);

  }
  .footer {
    padding: 1.5rem;
    h4,h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 600;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
  }
`

export default Card

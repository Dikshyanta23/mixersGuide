import React from 'react'
import Card from '../components/Card'
import styled from 'styled-components'

const Cocktails = ({drinks}) => {
  if (!drinks) {
    return <h4 style={{textAlign:'center'}}>No matching results...</h4>
  }
  const newList = drinks.map((item)=> {
    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item
    return {id: idDrink, name: strDrink, image: strDrinkThumb, alcoholic: strAlcoholic, glass: strGlass}
  })
  return (
    <Wrapper>
      {newList.map((item)=> {
        return <Card key={item.id} {...item} />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`

export default Cocktails

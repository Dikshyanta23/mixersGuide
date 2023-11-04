import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <h3>About Us</h3>
      <p>Eager to enjoy the holidays with the lads and fancy some crazy cocktails? Do not worry, we got you covered. Browse the application and choose any cocktail from a wide range of the popular ones from across the globe. Each drink is accompanied with easy-to-follow instructions, so that you can have a pub-like quality experience with your pals within the comfort of your house.</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h3 {
    color: #662d91;
    font-weight: 600;
    font-size: 1.75;
  }

  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
`;

export default About

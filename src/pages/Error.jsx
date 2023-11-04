import React from 'react'
import errImg from '../images/err.svg'
import {Link, useRouteError} from 'react-router-dom'
import styled from 'styled-components'

const Error = () => {
    const error = useRouteError()
    console.log(error);
    if(error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <img src={errImg} alt="not-found image" />
                    <h3>Resource not found</h3>
                    <p>Sorry we are unable to find the page you are looking for</p>
                    <Link to='/' className='link'>Back Home</Link>
                </div>
            </Wrapper>
        )
    }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong!</h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2.5rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  a {
    color: #662d91;
  }
`;

export default Error

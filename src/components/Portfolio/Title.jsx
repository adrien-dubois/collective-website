import React from 'react'
import styled from "styled-components"
import Banner from './Banner';

const Title = () => {
  return (
    <Div>
        <Banner/>
    </Div>
  )
}

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Title
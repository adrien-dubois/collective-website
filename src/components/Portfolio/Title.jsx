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

const Div = styled.section`
    width: 100vw;
    height: 100vh;

`;

export default Title
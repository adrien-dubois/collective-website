import ScrollToTop from 'components/Collective/ScrollToTop'
import Home from 'components/Portfolio/Home'
import React from 'react'
import styled from 'styled-components'

const Portfolio = () => {
    var style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
    document.head.appendChild(style);
  return (
    <Div>
      <ScrollToTop/>
      <Home />
    </Div>
  )
}

const Div = styled.div`

`;

export default Portfolio

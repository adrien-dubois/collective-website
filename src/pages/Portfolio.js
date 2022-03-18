import ScrollToTop from 'components/Collective/ScrollToTop'
import Footer from 'components/Footer/Footer'
import Gallery from 'components/Portfolio/Gallery'
import Home from 'components/Portfolio/Home'
import Title from 'components/Portfolio/Title'
import React from 'react'
import styled from 'styled-components'



const Portfolio = () => {

    
  return (
    <>
      <Container>
        <ScrollToTop/>
        <Title/>
        <Gallery/>
        <Home />
        <Footer/>
      </Container>
  </>
  );
}


const Container = styled.div`
  position: relative;
`;

export default Portfolio

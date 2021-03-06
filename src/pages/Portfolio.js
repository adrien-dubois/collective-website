import ScrollToTop from 'components/Collective/ScrollToTop'
import Footer from 'components/Footer/Footer'
import Gallery from 'components/Portfolio/Gallery'
import Home from 'components/Portfolio/Home'
import Title from 'components/Portfolio/Title'
import React from 'react'



export default function Portfolio() {
  return (
    <div>
      <ScrollToTop/>
      <Title/>
      <Gallery/>
      <Home />
      <Footer/>
  </div>
  );
}

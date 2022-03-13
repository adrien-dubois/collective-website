import ScrollToTop from 'components/Collective/ScrollToTop'
import Footer from 'components/Footer/Footer'
import Home from 'components/Portfolio/Home'
import { motion } from 'framer-motion'
import React from 'react'


const Portfolio = () => {
    var style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
    document.head.appendChild(style);
  return (
    <motion.div initial="hidden" animate="visible" >
      <ScrollToTop/>
      <Home />
      <Footer/>
    </motion.div>
  )
}

export default Portfolio

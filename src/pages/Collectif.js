import Blog from 'components/Collective/Blog'
import Home from 'components/Collective/Home'
import Milestones from 'components/Collective/Milestones'
import Pricing from 'components/Collective/Pricing'
import ScrollToTop from 'components/Collective/ScrollToTop'
import Services from 'components/Collective/Services'
import Skills from 'components/Collective/Skills'
import Team from 'components/Collective/Team'
import Footer from 'components/Footer/Footer'
import { motion } from 'framer-motion'
import React from 'react'


export default function Collectif() {
  return ( 
    <motion.div initial="hidden" animate="visible" >
        {/* <ScrollToTop/>
        <Home/>
        <Services/>
        <Milestones/>
        <Blog/>
        <Pricing/> */}
        <Team/>
        <Skills/>
        <Footer/>
    </motion.div>
  );
};
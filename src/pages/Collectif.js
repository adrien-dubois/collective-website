import Blog from 'components/Collective/Blog'
import Home from 'components/Collective/Home'
import Milestones from 'components/Collective/Milestones'
import Pricing from 'components/Collective/Pricing'
import Services from 'components/Collective/Services'
import Skills from 'components/Collective/Skills'
import Team from 'components/Collective/Team'
import Footer from 'components/Footer'
import React from 'react'

const Collectif = () => {
  return ( <div>
      <Home/>
      <Services/>
      <Milestones/>
      <Blog/>
      <Pricing/>
      <Team/>
      <Skills/>
      <Footer/>
  </div>
  )
}

export default Collectif;
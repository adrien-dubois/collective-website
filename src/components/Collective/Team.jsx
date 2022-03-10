import React from 'react'
import { Carousel, Section, TeamTitle } from './Styles/Team.elements'
import team1 from "../../assets/img/collective/team1.png"
import team2 from "../../assets/img/collective/team2.png"
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Cards from './Cards';
import { useScroll } from './useScroll'
import { motion } from 'framer-motion'
import { teamAnimations } from 'Animation';


const Team = () => {
  
  const [element, controls] = useScroll();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Section id="team" ref={element}>
      <div className="background">
        <img src={team1} alt="Bubble team" className='design1'/>  
        <img src={team2} alt="Bubble team" className='design2'/>  
      </div>
        <TeamTitle>
          <p>Les membres de The Square.</p>
          <h2>Découvrez l'équipe de freelances du collectif</h2>
        </TeamTitle>
      <motion.div 
        className="container"
        variants={teamAnimations}
        animate={controls}
        transition= {{
          delay: 0.09,
          type: 'tween',
          duration: 0.8
        }}
      >
        <Carousel>
          <Slider {...settings}>
                <Cards
                    text="Sit id exercitation enim ipsum voluptate esse laborum sunt esse quis sint. Incididunt magna sunt amet commodo laborum tempor sint quis occaecat fugiat mollit qui fugiat incididunt. "
                    name="Gaëlle Ruf"
                    subtitle="Tech Lead"
                    image="gaelle"
                    email="gaelle@the-square.net"
                />
                
                <Cards
                    text="Sit id exercitation enim ipsum voluptate esse laborum sunt esse quis sint. Incididunt magna sunt amet commodo laborum tempor sint quis occaecat fugiat mollit qui fugiat incididunt. "
                    name="Nathan Guyard"
                    subtitle="Responsable commercial"
                    image="nathan"
                    email="nathan@the-square.net"
                />
                
                <Cards
                    text="Sit id exercitation enim ipsum voluptate esse laborum sunt esse quis sint. Incididunt magna sunt amet commodo laborum tempor sint quis occaecat fugiat mollit qui fugiat incididunt. "
                    name="Mehdi Mosteghami"
                    subtitle="Scrum Master"
                    image="mehdi"
                    email="mehdi@the-square.net"
                />
                
                <Cards
                    text="Sit id exercitation enim ipsum voluptate esse laborum sunt esse quis sint. Incididunt magna sunt amet commodo laborum tempor sint quis occaecat fugiat mollit qui fugiat incididunt. "
                    name="Adrien Dubois"
                    subtitle="Développeur / Webdesigner"
                    image="adrien"
                    email="adrien@the-square.net"
                    lastone
                />
                
          </Slider>
        </Carousel>
      </motion.div>
    </Section>
  )
}

export default Team
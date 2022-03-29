import React from 'react'
import Play from '../../assets/img/collective/play.png';
import { Section } from './Styles/Services.elements';
import Title from './Title';
import { useScroll } from "components/Collective/useScroll";
import { motion } from 'framer-motion';
import { servicesAnimations } from 'Animation';
import { servicesData } from '../../datas/servicesData'


function Services() {

  const [element, controls] = useScroll();


  
  return (
    <Section id="services" ref={element}>
      <Title value="services" />
      <div className="services">
        {
          servicesData.map(({type, text, image}, index) => {
            return (
              <motion.div 
                className="services__service"
                variants={servicesAnimations}
                animate={controls}
                transition={{
                  delay: 0.09,
                  type: "tween",
                  duration: "0.8",
                }}
                >
                <div className="services__service__image">
                  <img src={image} alt='service' />  
                </div>
                <div className="services__service__title">
                  <span>0{index + 1}</span>
                  <h2>{type}</h2>  
                </div> 
                <div className="services__service__description">
                  {text}  
                </div>
                <div className="play">
                  <img src={Play} alt='Play'/>
                </div>
              </motion.div>
            )
          })
        }  
      </div>
    </Section>
  )
}

export default Services
import React from 'react'
import { Section } from './Styles/Skills.elements'
import skills1 from '../../assets/img/collective/skills1.png'
import skills2 from '../../assets/img/collective/skills2.png'
import Title from './Title'
import { useScroll } from './useScroll'
import { motion } from 'framer-motion'
import { skillsBarAnimations } from 'Animation'


function Skills() {

  const [element, controls] = useScroll();

  const skillsData = [
    {
      name: "From Scratch",
      amount: "95"
    },
    {
      name: "Symfony & PHP",
      amount: "80"
    },
    {
      name: "React & JS",
      amount: "70"
    },
    {
      name: "Webdesign",
      amount: "70"
    },
    {
      name: "Sécurité",
      amount: "95"
    },
  ]
  return (
    <Section id="skills" ref={element}>
      <Title value="skills"/>
        <div className="background">
          <img src={skills1} alt='Background blobs' className='design1'/> 
          <img src={skills2} alt='Background blobs' className='design2'/> 
        </div>
        <div className="skill__title">
          <p>Nos skills</p>
          <h2>Les compétences du collectif</h2>  
        </div>
        <div className="skills">
          <div className="skills__bars">
          {
            skillsData.map(({name, amount}) => {

              return(

                <motion.div 
                  className="skills__bars__bar" 
                  key={name}
                  variants={skillsBarAnimations}
                  animate={controls}
                  transition={{
                    delay: 0.3,
                    type: 'tween',
                    duration: 0.8,
                  }}
                >
                  <div className="container">
                    <progress value={amount} max="100" />
                    <span>{name}</span>  
                  </div>
                  <h3>{amount}%</h3>
                </motion.div>
                
              );
            })}  
          </div>
          <div className="skills__content">
            <p className="title">
               Nos sites sont conçus en Responsive Web Design (RWD), c’est-à-dire offrant une expérience de navigation optimisée en fonction de l’écran utilisé par l’utilisateur : ordinateur, mobile ou tablette.
            </p>
            <div className="description">
              Nous adoptons une approche Mobile First, une stratégie qui consiste à commencer la création d’un site par sa version mobile. Cette approche permet non seulement de se centrer sur les fonctionnalités essentielles à développer, mais elle est la première démarche de référencement naturel : les moteurs de recherche procèdent à une indexation prioritaire des sites orientés mobile. 
            </div>
          </div>
        </div>
    </Section>
  )
}

export default Skills
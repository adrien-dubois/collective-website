import React from 'react'
import { Section } from './Styles/Skills.elements'
import skills1 from '../../assets/img/collective/skills1.png'
import skills2 from '../../assets/img/collective/skills2.png'
import Title from './Title'
import { useScroll } from './useScroll'
import { motion } from 'framer-motion'
import { skillsBarAnimations } from 'Animation'
import { skillsData } from '../../datas/skillsData'

function Skills() {

  const [element, controls] = useScroll();

  
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
               Parce que le domaine est en constante évolution, nous sommes en veille permanente sur les évolutions de notre métier : nouvelles technologies, outils, frameworks, librairies, méthodes de travail… il y a toujours quelque chose à apprendre et c’est l’une des raisons pour lesquelles nous sommes passionnés par notre métier !
            </p>
            <div className="description">
               Spécialisés PHP et Javascript, notamment sur les frameworks Symfony et React, nous n’en délaissons pas pour autant les autres langages de programmation et CMS, afin d’être en mesure de vous proposer des solutions modernes qui répondront tant à vos besoins qu’à ceux de vos internautes.
            </div>
          </div>
        </div>
    </Section>
  )
}

export default Skills
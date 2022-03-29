import React from 'react'
import Play from '../../assets/img/collective/play.png';
import service1 from '../../assets/img/collective/service1.png';
import service2 from '../../assets/img/collective/service2.png';
import service3 from '../../assets/img/collective/service3.png';
import { Section } from './Styles/Services.elements';
import Title from './Title';
import { useScroll } from "components/Collective/useScroll";
import { motion } from 'framer-motion';
import { servicesAnimations } from 'Animation';


function Services() {

  const [element, controls] = useScroll();

  const data = [
    {
      type: "Site web",
      text: <p>
        Au travers de ce service, nous vous proposerons divers types de sites web, mais tous comprendrons au moins ces caractéristiques :
        <ul>
          <li>Site Responsive & Mobile first</li>
          <li>Accompagnement personnalisé</li>
          <li>SEO Friendly</li>
          <li>Interface d'aministration personnalisable</li>
          <li>Hébergement & Support</li>
        </ul>
      </p>,
      image: service1,
    },
    {
      type: "Design",
      text: <p>
        Nos réalisations ont toutes un design unique, reflétant votre personnalité ou celle de votre activité, afin de vous démarquer dans votre domaine et dire au revoir aux templates.<br/>
        Nous misons également sur un UX sur mesure (User Xperience), résultant de la confrontation entre la conception et la réalité.
      </p>,
      image: service2,
    },

    {
      type: "Agile",
      text: <p>
        Notre collectif utilise la méthodologie Agile <i>(on ne fera pas la blague - méthode à Gilles - non non non)</i> sur le modèle Scrum. C'est à dire que vous serez profondément impliqué dans le projet en plus d'en être une partie prenante.<br/>
        Cette méthode passera par diverses étapes :
        <ol>
          <li>Définition des besoins</li>
          <li>Wireframe</li>
          <li>Maquettage graphique</li>
          <li>Développement / tests</li>
          <li>Mise en ligne</li>
          <li>Assistance & maintenance</li>
        </ol>
      </p>,
      image: service3,
    },
    
  ];
  
  return (
    <Section id="services" ref={element}>
      <Title value="services" />
      <div className="services">
        {
          data.map(({type, text, image}, index) => {
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
                <img src={Play} alt='Play'/>
              </motion.div>
            )
          })
        }  
      </div>
    </Section>
  )
}

export default Services
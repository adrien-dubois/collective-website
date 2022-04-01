import React from 'react'
import { Section } from './Styles/Home.elements'
import { motion } from "framer-motion"
import { homeAnimations, homeInfoAnimation } from "Animation"

function Home() {
  return (

    <Section id="home">
      <div className="home">
        <motion.div 
          className="content"
          variants={homeAnimations}
          transition={{ 
            delay: 0.3, 
            duration: 0.6, 
            type: "tween" 
          }}
        >
          <div className="title">
            <h1>Le collectif</h1>
          </div>
          <div className="sub-title">
            <h3>
              Une équipe complète à votre service
            </h3>
          </div>
          <div className="subtitle">
            <p>  
            Combinaison entre freelance et entreprise, un collectif concentre des compétences variées et complémentaires au sein d’une seule et même entité : c’est le cas de The Square., formation de 4 développeurs aux parcours différents, issus de la même école de développement.
            </p>
            <span> 
              “ Conscients que la technicité de notre métier n’a de sens que si elle est fondée sur une approche humaine, nous basons notre travail sur une écoute active et attentive des besoins, avec pour objectifs performance du site et qualité de l’expérience utilisateur (UX design) ”.
            </span>
            
          </div>

        </motion.div>
      </div>
      <motion.div 
        className="info"
        transition={{
          delay: 0.3, 
          duration: 0.6, 
          type:"tween"
        }}
        variants = {homeInfoAnimation}
      >
        <div className="grid">

          <div className="col">
            <strong>Collectif</strong>
            <p>The Square.</p>
          </div> 

          <div className="col">
            <strong>Email</strong>
            <p>contact@the-square.net</p>
          </div> 

          <div className="col">
            <strong>Téléphone</strong>
            <p>+33 665 354 481</p>
          </div>  

          <div className="col">
            <strong>Localisation</strong>
            <p>Un carré dans l'Hexagone entre</p>
            <p>le Nord, le Jura, l'Auvergne</p>
            <p>& le Bassin Parisien</p>
          </div>

          <div className="col">
            <strong>Services</strong>
            <p>Sites vitrine</p>
            <p>E-Commerce</p>
            <p>Sites web sur mesure</p>
          </div>

          <div className="col">
            <strong>Working hours</strong>
            <p>Lundi au vendredi </p>
            <p>09h00 / 18h00</p>
          </div>

        </div>  
      </motion.div>
    </Section>

  )
}

export default Home
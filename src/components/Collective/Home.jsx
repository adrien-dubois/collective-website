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
          <div className="subtitle">
            <p>  
              Fugiat excepteur qui irure ut enim dolor. Nostrud ut cillum ipsum enim do anim. Et quis qui ullamco consequat nulla tempor adipisicing fugiat ipsum proident eiusmod commodo. Labore nostrud non non reprehenderit. Mollit proident sit voluptate pariatur amet id irure ex. Exercitation elit adipisicing eiusmod labore officia magna. Qui est id consectetur veniam. Eiusmod deserunt magna proident Lorem reprehenderit culpa non duis. Aliquip ex pariatur irure et duis duis cillum. Dolor velit nostrud amet anim ullamco ullamco aliqua est laboris veniam exercitation eu qui. Laboris nisi deserunt eu magna dolor voluptate. 
            </p> 
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
            <strong>Adresse</strong>
            <p>Quelque part en France</p>
          </div>

          <div className="col">
            <strong>Services</strong>
            <p>Sites vitrine</p>
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
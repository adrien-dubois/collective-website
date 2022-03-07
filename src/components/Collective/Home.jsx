import React from 'react'
import Play from '../../assets/img/collective/play.png'
import { Section } from './Styles/Home.elements'


function Home() {
  return (

    <Section id="home">
      <div className="home">
        <div className="content">
          <div className="title">
            <h1>Le collectif</h1>
          </div>
          <div className="subtitle">
            <p>  
              Fugiat excepteur qui irure ut enim dolor. Nostrud ut cillum ipsum enim do anim. Et quis qui ullamco consequat nulla tempor adipisicing fugiat ipsum proident eiusmod commodo. Labore nostrud non non reprehenderit. Mollit proident sit voluptate pariatur amet id irure ex.  
            </p> 
          </div>
          <img src={Play} alt="Play button" />
        </div>
      </div>
      <div className="info">
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
      </div>
    </Section>

  )
}

export default Home
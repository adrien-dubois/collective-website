import React from 'react';
import service1 from '../assets/img/collective/service1.png';
import service2 from '../assets/img/collective/service2.png';
import service3 from '../assets/img/collective/service3.png';

export const servicesData = [
    {
      type: "Site web",
      text: <p>
        Tous les sites que nous concevons incluent des services de base :
        <i>
          <ul>
            <li>Site Responsive & Mobile first</li>
            <li>Accompagnement personnalisé</li>
            <li>SEO Friendly</li>
            <li>Interface d'administration personnalisable</li>
            <li>Hébergement & Support</li>
          </ul>
        </i>
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
        Notre collectif utilise la méthodologie Agile sur le modèle Scrum, qui offre l’avantage d’un travail collaboratif visant à vous impliquer pleinement dans le développement de votre projet.<br/>
        Cette méthode passera par diverses étapes :
        <i>
          <ol>
            <li>Définition des besoins</li>
            <li>Wireframes</li>
            <li>Maquettage graphique</li>
            <li>Développement / tests</li>
            <li>Mise en ligne</li>
            <li>Assistance & maintenance</li>
          </ol>
        </i>
      </p>,
      image: service3,
    },
    
  ];
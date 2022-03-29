import React from 'react';
import service1 from '../assets/img/collective/service1.png';
import service2 from '../assets/img/collective/service2.png';
import service3 from '../assets/img/collective/service3.png';

export const servicesData = [
    {
      type: "Site web",
      text: <p>
        Au travers de ce service, nous vous proposerons divers types de sites web, mais tous comprendrons au moins ces caractéristiques :
        <i>
          <ul>
            <li>Site Responsive & Mobile first</li>
            <li>Accompagnement personnalisé</li>
            <li>SEO Friendly</li>
            <li>Interface d'aministration personnalisable</li>
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
        Notre collectif utilise la méthodologie Agile <i>(on ne fera pas la blague - méthode à Gilles - non non non)</i> sur le modèle Scrum. C'est à dire que vous serez profondément impliqué dans le projet en plus d'en être une partie prenante.<br/>
        Cette méthode passera par diverses étapes :
        <i>
          <ol>
            <li>Définition des besoins</li>
            <li>Wireframe</li>
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
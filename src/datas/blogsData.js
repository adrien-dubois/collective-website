import React from 'react';

export const blogsData = [
    {
      titre:"Le Responsive Web Design",
      type:"UI / UX / SEO",
      image: "responsive.png",
      description: <p>
        Nos sites sont conçus en Responsive Web Design (RWD), c’est-à-dire offrant une expérience de navigation optimisée en fonction de l’écran utilisé par l’utilisateur : <b>ordinateur, mobile ou tablette.</b>
        <br/>
        Nous adoptons une approche <b>Mobile First</b>, une stratégie qui consiste à commencer la création d’un site par sa version mobile. Cette approche permet non seulement de se centrer sur les fonctionnalités essentielles à développer, mais elle est la première démarche de référencement naturel : les moteurs de recherche procèdent à une <b>indexation prioritaire</b> des sites orientés mobile.
      </p>
    },
    {
      titre:"Nouvelle réalisation",
      type:"Étude de cas",
      image: "80flix.png",
      description: <p>
        <strong>Infos générales</strong>
        <br/>
        <ul>
          <li><span className="websiteTitle">80's Flix</span><i> (titre du site)</i></li>
          <li>Réalisé par Gaëlle, pour The Square.</li>
          <li>Ce site web a été réalisé en side project pour notre collectif, afin de servir d'exemple sur le FrameWork Symfony, pour lequel nous avons une affection particulière.</li>
        </ul>
        <strong>Contexte du projet</strong>
        <br/>
        <ul>
          <li>L'idée est partie d'un projet réalisé durant la formation, qui était le mix entre une base de donnée filmographique comme IMDDB et un service de streaming comme Netflix.</li>
          <li>Le but a été de se servir de cette base pour ensuite y apporter une atmosphère personnelle, tant sur la partie principale que sur l'interface d'administration.</li>
          <li>Le gros du travail a été effectué surtout sur la partie CSS et sur le backoffice.</li>
        </ul>
      </p>
    },
    {
      titre:"Certification OPQUAST",
      type:"Accessibilité du Web",
      image: "opquast.jpg",
      description: <p>
        Chaque membre du collectif a obtenu la certification Opquast “Maîtrise de la qualité en projet Web”.
        <br/>
        Résolument orientée utilisateur, la qualité web tend à proposer la meilleure expérience de navigation possible, grâce à la mise en place de bonnes pratiques. 
        <br/>
        La certification atteste par ailleurs de l’acquisition d’un socle de règles, de compétences et de vocabulaire multidisciplinaires communs à tous les professionnels du web. 

      </p>
    },
  ];
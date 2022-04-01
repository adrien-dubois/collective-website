import React from 'react';
import { BiLock } from 'react-icons/bi'


export const datas = [
    {value: "Design & Intégration", type: "Site vitrine"},
    {value: "Responsive design (Mobile & tablette)", type: "Site vitrine"},
    {value: "Médias (photos / vidéos)", type: "Site vitrine"},
    {value: "Formulaire de contact", type: "Site vitrine"},
    {value: "Conformité RGPD", type: "Site vitrine"},
    {value: "Mise en ligne, nom de domaine & hébergement (12mois)", type: "Site vitrine"},
    {value: <p>Certificat SSL <BiLock/> <i>(https://)</i></p>  , type: "Site vitrine"},
    {value: "Support de votre site web", type: "Site vitrine"},

    {value: "Base de donnée de produits", type: "E-Commerce"},
    {value: "Comptes clients", type: "E-Commerce"},
    {value: "Accès à un backoffice de gestion", type: "E-Commerce"},

    {value: "Accompagnement personnalisé", type: "Sur-Mesure"},
    {value: "Méthode Agile (SCRUM)", type: "Sur-Mesure"},
    {value: "Stack Symfony / React & API dédiée", type: "Sur-Mesure"},
  ];

  export const plans = [
    {
      name: "Site vitrine",
      description:"01"
    },

    {
      name: "E-Commerce",
      description:"02"
    },

    {
      name: "Sur-Mesure",
      description:"03"
    },

  ]
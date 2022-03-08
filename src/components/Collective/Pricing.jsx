import React, { Fragment } from 'react'
import { Section } from './Styles/Pricing.elements'
import pricing1 from "../../assets/img/collective/pricing1.png"
import pricing2 from "../../assets/img/collective/pricing2.png"
import Title from './Title'

function Pricing() {

  const plans = [
    {
      name: "Site vitrine",
      description:"Ea ex non veniam adipisicing nostrud magna amet pariatur est incididunt cillum cillum."
    },

    {
      name: "Site E-Commerce",
      description:"Voluptate ea aliqua elit ut irure aliquip est enim esse id dolor dolore eu."
    },

    {
      name: "Site sur mesure",
      description:"Aliquip magna ullamco tempor fugiat laboris cillum Lorem cillum excepteur."
    },

  ]

  const datas = [
    {value: "Design & Intégration", type: "Site vitrine"},
    {value: "Responsive design (Mobile & tablette)", type: "Site vitrine"},
    {value: "Médias (photos / vidéos", type: "Site vitrine"},
    {value: "Formulaire de contact", type: "Site vitrine"},
    {value: "Base de donnée de produits", type: "Site E-Commerce"},
    {value: "Comptes clients", type: "Site E-Commerce"},
    {value: "Accès à un backoffice de gestion", type: "Site E-Commerce"},
    {value: "Accompagnement personnalisé", type: "Site sur mesure"},
    {value: "Méthode Agile (SCRUM)", type: "Site sur mesure"},
    {value: "Stack Symfony & React", type: "Site sur mesure"},
    {value: "Conformité RGPD", type: "Site vitrine"},
    {value: "Mise en ligne & hébergement (12mois)", type: "Site vitrine"},
    {value: "Certificat SSL (https://)", type: "Site vitrine"},
    {value: "Support de votre site web", type: "Site vitrine"}
  ];
  return (
    <Section id="pricing">
      <Title value="Formules" />
      <div className="background">
        <img src={pricing1} alt="Design" className='bg1' /> 
        <img src={pricing2} alt="Design" className='bg2' /> 
      </div>
      <div className="pricing__title">
        <p>Nos différentes formules</p>
        <h2>Trouvez la formule qui vous conviens selon vos besoins & vos envies.</h2>  
      </div>
      <div className="pricing">
        {
          plans.map(({name, description}, index) => {
            return(
              <div className="pricing__plan" key={index}>
                <div className="pricing__plan__name">
                  <h2>{name}</h2>
                  <div className="pricing__plan__name__description">
                    <p>{description}</p>  
                  </div>
                </div> 
                <div className="pricing__plan__content">
                  <ul className={`pricing__plan__content__features ${name}`}>
                    {datas.map(({value,type}, index2) => {
                      return(

                        <Fragment key={index2}>

                          {name === "Site vitrine" ? (
                            type === name ? (
                            <li>{value}</li>
                            ) : (
                            <li className='line'>{value}</li>
                            )
                          ) : name === "Site E-Commerce" ? (
                            type === "Site vitrine" || type === name ? (
                            <li>{value}</li>
                            ) : (
                            <li className='line'>{value}</li>
                            )
                          ) : (
                            name === "Site sur mesure" && <li>{value}</li>
                          )}

                        </Fragment>
                      );
                    })}  
                  </ul>
                  <div className="pricing__plan__content__actions">
                    <span>Contactez nous</span>  
                  </div>
                </div> 
              </div>
            )
          })
        }  
      </div>
    </Section>
  )
}

export default Pricing
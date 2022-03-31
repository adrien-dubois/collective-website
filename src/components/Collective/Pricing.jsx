import React, { Fragment } from 'react'
import { Section } from './Styles/Pricing.elements'
import pricing1 from "../../assets/img/collective/pricing1.png"
import pricing2 from "../../assets/img/collective/pricing2.png"
import Title from './Title'
import { useScroll } from './useScroll'
import { motion } from 'framer-motion'
import { pricingAnimations } from 'Animation'
import { datas, plans } from '../../datas/pricingDatas'


function Pricing() {

  const [element, controls] = useScroll();

  

  
  return (
    <Section id="pricing" ref={element}>
      <Title value="Formules" />
      <div className="background">
        <img src={pricing1} alt="Design" className='bg1' /> 
        <img src={pricing2} alt="Design" className='bg2' /> 
      </div>
      <div className="pricing__title">
        <p>Nos différentes formules</p>
        <h2>Trouvez la formule qui vous convient, selon vos besoins</h2>  
      </div>
      <div className="pricing">
        {
          plans.map(({name, description}, index) => {
            return(
              <motion.div 
                className="pricing__plan" 
                key={index}
                variants={pricingAnimations}
                animate={controls}
                transition= {{
                  delay: 0.09,
                  type: 'tween',
                  duration: 0.8
                }}
              >
                <div className="pricing__plan__name">
                  <h2>{name}</h2>
                  <div className="pricing__plan__name__description">
                    <span>{description}</span>
                    <p>Square Pack</p>
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
                          ) : name === "E-Commerce" ? (
                            type === "Site vitrine" || type === name ? (
                            <li>{value}</li>
                            ) : (
                            <li className='line'>{value}</li>
                            )
                          ) : (
                            name === "Sur-Mesure" && <li>{value}</li>
                          )}

                        </Fragment>
                      );
                    })}  
                  </ul>
                  
                </div> 
              </motion.div>
            )
          })
        } 
        <div className="btn-cta-price">
          <a href='# '>Contactez nous</a>  
        </div> 
      </div>
    </Section>
  )
}

export default Pricing
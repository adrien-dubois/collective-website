import React, { Fragment, useState } from 'react'
import { Section } from './Styles/Pricing.elements'
import pricing1 from "../../assets/img/collective/pricing1.png"
import pricing2 from "../../assets/img/collective/pricing2.png"
import Title from './Title'
import { useScroll } from './useScroll'
import { motion } from 'framer-motion'
import { pricingAnimations } from 'Animation'
import { datas, plans } from '../../datas/pricingDatas'
import { FaRegLightbulb } from 'react-icons/fa'
import { GiPresent } from 'react-icons/gi'
import { Button } from './Styles/Modal.elements'
import { Modal } from './Modal'


function Pricing() {

  const [element, controls] = useScroll();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  }
  
  return (
    <Section id="pricing" ref={element}>
      <Title value="Formules" />
      <div className="background">
        <img src={pricing1} alt="Design" className='bg1' /> 
        <img src={pricing2} alt="Design" className='bg2' /> 
      </div>

      {/* TITLE & SUBTITILE */}
      <div className="pricing__title">
        <p>Nos différentes formules</p>
        <h2>Trouvez la formule qui vous convient, selon vos besoins</h2>

        {/* BUBBLE FOR PACK */}
        <div className="bubble">
          <span className='bubbleTitle'><FaRegLightbulb/> Rappel :</span>
          <h3>
             Quelle que soit la formule que vous choisissez, il y aura toujours des services de base compris dans la prestation.
             <br/>
             <i>(cliquez pour voir la liste)</i>
          </h3> 

          {/* MODAL */}
          <div className="modalButton">
            <Button onClick={openModal}>
                <GiPresent size="30px"/>
            </Button>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
          </div>
        </div>
      </div>

      {/* MAPPING THE THREE FORMULAS */}
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
          <a href='/contact'>Contactez nous</a>  
        </div> 
      </div>
    </Section>
  )
}

export default Pricing
import React from 'react'
import Play from '../../assets/img/collective/play.png';
import service1 from '../../assets/img/collective/service1.png';
import service2 from '../../assets/img/collective/service2.png';
import service3 from '../../assets/img/collective/service3.png';
import { Section } from './Styles/Services.elements';
import Title from './Title';
import { useScroll } from "components/Collective/useScroll";
import { motion } from 'framer-motion';
import { servicesAnimations } from 'Animation';


function Services() {

  const [element, controls] = useScroll();

  const data = [
    {
      type: "Site web",
      text: "Esse nulla sint quis incididunt do sit. Ad laboris sunt excepteur aliqua incididunt ea. Ex nisi laborum duis do nulla laboris ullamco elit. Do culpa magna laboris minim consectetur pariatur ex laborum. Elit excepteur tempor laboris aliqua cupidatat cupidatat ipsum. Ut adipisicing ea ea enim adipisicing mollit voluptate.",
      image: service1,
    },
    {
      type: "Design",
      text: "Reprehenderit aliqua ea incididunt aliqua culpa nisi labore ut amet consequat Lorem nostrud ex sit. Tempor et magna elit in est pariatur eu do sit est aliquip. Eu mollit ullamco sint officia et veniam occaecat minim nulla exercitation id. Incididunt laboris ullamco dolor fugiat sunt. Est sit mollit excepteur deserunt .",
      image: service2,
    },

    {
      type: "Support",
      text: "Ex nisi anim labore officia consequat adipisicing duis. Proident officia ut veniam amet ex Lorem deserunt nulla labore laboris dolor anim. Cillum cupidatat Lorem commodo sunt do pariatur fugiat adipisicing consectetur et pariatur ut qui. Magna irure ex culpa anim. Amet amet consequat enim enim cillum pariatur culpa irure ipsum est .",
      image: service3,
    },
    
  ];
  
  return (
    <Section id="services" ref={element}>
      <Title value="services" />
      <div className="services">
        {
          data.map(({type, text, image}, index) => {
            return (
              <motion.div 
                className="services__service"
                variants={servicesAnimations}
                animate={controls}
                transition={{
                  delay: 0.09,
                  type: "tween",
                  duration: "0.8",
                }}
                >
                <div className="services__service__image">
                  <img src={image} alt='service' />  
                </div>
                <div className="services__service__title">
                  <span>0{index + 1}</span>
                  <h2>{type}</h2>  
                </div> 
                <p className="services__service__description">
                  {text}  
                </p>
                <img src={Play} alt='Play'/>
              </motion.div>
            )
          })
        }  
      </div>
    </Section>
  )
}

export default Services
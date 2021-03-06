import React from 'react'
import { Section } from './Styles/Milestones.elements'
import { IconContext } from 'react-icons'
import { useScroll } from "./useScroll"
import {  motion } from 'framer-motion'
import { milestoneAnimations } from 'Animation'
import VisibilitySensor from 'react-visibility-sensor'
import CountUp from "react-countup";
import { milestone } from "../../datas/milestonesData"


function Milestones() {

  const [element, controls] = useScroll();
  

  return (
    
    // Settings of React Icons presents in Milestone
    <IconContext.Provider value={{ 
      size: '4rem', 
      color: 'var(--light-chocolate)' 
    }}>

      <Section id="milestone" ref={element}>
        <div className="milestones">
          {
            milestone.map(({image, data, amount}) => {
              return(
              <motion.div 
                className="milestone"
                variants={milestoneAnimations}
                animate={controls}
                transition={{
                  delay: 0.09,
                  type: 'tween',
                  duration: '0.8',
                }}
              >
                {image}
                <span>{data}</span>
                <CountUp duration={1.5} end={amount} redraw={true}>
                  {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                          <p ref={countUpRef} />
                      </VisibilitySensor>
                  )}
              </CountUp>
              </motion.div>
              );
            })
          }  
        </div>
      </Section>
    </IconContext.Provider>
  )
}

export default Milestones
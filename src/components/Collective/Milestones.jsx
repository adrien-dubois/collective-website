import React from 'react'
import { Section } from './Styles/Milestones.elements'
import { FaRegUser, FaRegThumbsUp } from "react-icons/fa"
import { IoRocketOutline } from "react-icons/io5"
import { IconContext } from 'react-icons'
import { useScroll } from "./useScroll"
import { motion } from 'framer-motion'
import { milestoneAnimations } from 'Animation'


function Milestones() {
  const milestone = [
    {image: <FaRegUser/>,
     data: "Clients",
     amount: "12"
    },
    {image: <IoRocketOutline/>,
     data: "Projets déployés",
     amount: "18"
    },
    {image: <FaRegThumbsUp/>,
     data: "Likes",
     amount: "2400"
    }
  ];
  return (
    
    // Settings of React Icons presents in Milestone
    <IconContext.Provider value={{ 
      size: '4rem', 
      color: 'var(--light-chocolate)' 
    }}>

      <Section id="milestone">
        <div className="milestones">
          {
            milestone.map(({image, data, amount}) => {
              return(
              <div className="milestone">
                {image}
                <span>{data}</span>
                <p>{amount}</p>
              </div>
              );
            })
          }  
        </div>
      </Section>
    </IconContext.Provider>
  )
}

export default Milestones
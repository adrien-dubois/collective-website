import React from 'react'
import { Section } from './Styles/Milestones.elements'
import MilestoneBg from "../../assets/img/collective/milestone-background.png"
import { FaRegUser, FaRegThumbsUp } from "react-icons/fa"
import { IoRocketOutline } from "react-icons/io5"
import { IconContext } from 'react-icons'

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
     data: "Fans LinkedIn",
     amount: "2400"
    }
  ];
  return (
    
    // Settings of React Icons presents in Milestone
    <IconContext.Provider value={{ 
      size: '5rem', 
      color: 'var(--light-chocolate)' 
    }}>

      <Section>
        <div className="background">
          <img src={MilestoneBg} alt="Blob milestone" />
        </div>
        <div className="milestones">
          {
            milestone.map(({image, data, amount}) => {
              return(
              <div className="milestone">
                <p>{amount}</p>
                <span>{data}</span>
                {image}
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
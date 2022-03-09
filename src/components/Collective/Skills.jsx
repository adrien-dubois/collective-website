import React from 'react'
import { Section } from './Styles/Skills.elements'
import skills1 from '../../assets/img/collective/skills1.png'
import skills2 from '../../assets/img/collective/skills2.png'
import Title from './Title'

function Skills() {
  const skillsData = [
    {
      name: "From Scratch",
      amount: "95"
    },
    {
      name: "Symfony & PHP",
      amount: "80"
    },
    {
      name: "React & JS",
      amount: "70"
    },
    {
      name: "Webdesign",
      amount: "70"
    },
    {
      name: "Sécurité",
      amount: "95"
    },
  ]
  return (
    <Section id="skills">
      <Title value="skills"/>
        <div className="background">
          <img src={skills1} alt='Background blobs' className='design1'/> 
          <img src={skills2} alt='Background blobs' className='design2'/> 
        </div>
        <div className="skill__title">
          <p>Nos skills</p>
          <h2>Les compétences du collectif</h2>  
        </div>
        <div className="skills">
          <div className="skills__bars">
          {
            skillsData.map(({name, amount}) => {
              return(
                <div className="skills__bars__bar" key={name}>
                  <div className="container">
                    <progress value={amount} max="100" />
                    <span>{name}</span>  
                  </div>
                  <h3>{amount}%</h3>
                </div>
                
              );
            })}  
          </div>
          <div className="skills__content">
            <p className="title">
              Sit eu anim consectetur dolore amet et nisi id minim id ea non.Aliquip velit ea duis aliqua commodo laborum est incididunt.
            </p>
            <div className="description">
              Duis nostrud duis ex nisi. Ut incididunt nostrud consectetur pariatur in proident mollit sint. Fugiat sint nostrud non do est laborum officia sit. Enim tempor et minim nostrud nostrud amet aliquip. Excepteur sunt quis magna velit cillum reprehenderit tempor velit amet reprehenderit fugiat ea anim. 
            </div>
          </div>
        </div>
    </Section>
  )
}

export default Skills
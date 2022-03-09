import React from 'react';
import { 
    Content, 
    SLink, 
    SocialNetContainer 
} from './SocialNetwork.elements';
import { 
    FaGithub, 
    FaLinkedin, 
    FaTwitter 
} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const SocialNetwork = () => {

    const anim = () => {
        let navLinks = document.querySelectorAll('.social-network a');

        navLinks.forEach(link =>{
            link.addEventListener('mouseover', (e) => {
                let attrX = e.offsetX -20;
                let attrY = e.offsetY -13;

                link.style.transform = `translate(${attrX}px, ${attrY}px)`;
            })
            link.addEventListener('mouseleave', () =>{
                link.style.transform = '' ;
            })
        })
    }

  return (
    <IconContext.Provider value={{ size:"25px" }}>
        <SocialNetContainer className='social-network'>
            <Content className='content'>

                {/* GITHUB */}
                <SLink href="https://github.com/adrien-dubois" target="_blank" rel='noopener noreferrer' className='hover' onMouseOver={anim} >
                    <li><FaGithub /> </li>
                </SLink>

                {/* LINKEDIN */}
                <SLink href="https://www.linkedin.com/in/adrien-dubois-03/" target="_blank" rel='noopener noreferrer' className='hover' onMouseOver={anim} >
                    <li><FaLinkedin /> </li>
                </SLink>

                {/* TWITTER */}
                <SLink href="https://twitter.com/AdrienDuboisDev" target="_blank" rel='noopener noreferrer' className='hover' onMouseOver={anim} >
                    <li><FaTwitter /> </li>
                </SLink>
            </Content>
        </SocialNetContainer>
    </IconContext.Provider>
  );
};

export default SocialNetwork;

import React from 'react';
import SocialNetwork from 'components/SocialNetwork/SocialNetwork';
import { 
  CenterText, 
  FooterContainer, 
  LeftText, 
  RightText 
} from './Footer.elements';
import { useScroll } from 'components/Collective/useScroll';
import { footerAnimations } from 'Animation';


const Footer = () => {

  const [element, controls] = useScroll();

  return (
    <FooterContainer 
      ref={element}
      variants={footerAnimations}
      animate={controls}
      transition={{
        delay: 0.08,
        type: 'tween',
        duration: 0.8,
      }}
    >
      <LeftText>
            ©2022 made with ❤ <span>by The Square.</span>
      </LeftText>
      <CenterText>
            Suivez nous sur nos réseaux
            <SocialNetwork/>
      </CenterText>
      <RightText>
        <p>Dites nous tout</p>
        <a href='/contact'>Contact</a>
      </RightText>
    </FooterContainer>
  );
};

export default Footer;
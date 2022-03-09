import React from 'react';
import SocialNetwork from 'components/SocialNetwork/SocialNetwork';
import { 
  CenterText, 
  FooterContainer, 
  LeftText, 
  RightText 
} from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
      <LeftText>
            ©2022 made with ❤ <span>by The Square.</span>
      </LeftText>
      <CenterText>
            Suivez nous sur nos réseaux
            <SocialNetwork/>
      </CenterText>
      <RightText>
        <p>Dites nous tout</p>
        <a href='#'>Contact</a>
      </RightText>
    </FooterContainer>
  );
};

export default Footer;
import React from 'react';
import { 
    CARD, 
    ContactButton, 
    Div, 
    Divider, 
    Image,
    Info,
    Name,
    Subtitle,
    Text
} from './Styles/Cards.elements';
import { MdLaunch } from "react-icons/md"
import { IconContext } from 'react-icons/lib';


const Cards = ({
    name, 
    subtitle, 
    text, 
    image,
    website, 
    lastone
}) => {
    const Avatar = require(`../../assets/img/avatar/${image}.jpg`);
  return (
    <IconContext.Provider value={{ color: 'var(--light-chocolate)', size: '2.3rem' }} >
        <CARD lastone={lastone}>
            <Info>
                <Name>{name}</Name>
                <Subtitle>{subtitle}</Subtitle>
                <Divider></Divider>
                <Text>{text}</Text>
                <Div>
                    <MdLaunch/>
                    <a 
                        href={`${website}`} 
                        target="_blank" 
                        rel='noopener noreferer' 
                    >
                        <ContactButton>
                                <a>Portfolio</a> 
                        </ContactButton> 
                    </a>
                </Div>
            </Info>
                <Image img={Avatar} />
        </CARD>
    </IconContext.Provider>
  );
};

export default Cards;

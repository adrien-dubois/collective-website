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
    email, 
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
                    <ContactButton><a href={`${email}`} target="_blank" noopener noreferer >Portfolio </a></ContactButton> 
                </Div>
            </Info>
                <Image img={Avatar} />
        </CARD>
    </IconContext.Provider>
  );
};

export default Cards;

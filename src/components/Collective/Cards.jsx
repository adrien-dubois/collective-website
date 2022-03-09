import React from 'react';
import { 
    CARD, 
    ContactButton, 
    Divider, 
    Image,
    Info,
    Name,
    Subtitle,
    Text
} from './Styles/Cards.elements';


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
    <CARD lastone={lastone}>
        <Info>
            <Name>{name}</Name>
            <Subtitle>{subtitle}</Subtitle>
            <Divider></Divider>
            <Text>{text}</Text>
            <ContactButton><a href={`mailto: ${email}`}>Contact</a></ContactButton>
        </Info>
            <Image img={Avatar} />
    </CARD>
  );
};

export default Cards;

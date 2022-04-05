import React from 'react'

/*----- STYLES -----*/
import { 
  Carousel, 
  Section, 
  TeamTitle 
} from './Styles/Team.elements'
import { 
  ContactButton, 
  ContainerSingle, 
  Div, 
  Divider, 
  Image, 
  Info, 
  Name, 
  Subtitle, 
  Text 
} from './Styles/Cards.elements';

/*----- IMAGES -----*/
import team1 from "../../assets/img/collective/team1.png"
import team2 from "../../assets/img/collective/team2.png"

/*----- ANIMATION -----*/
import { useScroll } from './useScroll'
import { motion } from 'framer-motion'
import { teamAnimations } from 'Animation';

/*----- DATAS -----*/
import { teamDatas } from 'datas/teamDatas';
import { MdLaunch, MdOutlineSwipe } from 'react-icons/md';
import { IconContext } from 'react-icons';

/*------ CARDS ------*/
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { EffectCards } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.min.css';

const Team = () => {
  
  const [element, controls] = useScroll();
  
  return (
    <Section id="team" ref={element}>
      <div className="background">
        <img src={team1} alt="Bubble team" className='design1'/>  
        <img src={team2} alt="Bubble team" className='design2'/>  
      </div>
        <TeamTitle>
          <p>Les membres de The Square.</p>
          <h2>Découvrez l'équipe full-stack du collectif</h2>
        </TeamTitle>
      <motion.div 
        className="container"
        variants={teamAnimations}
        animate={controls}
        transition= {{
          delay: 0.09,
          type: 'tween',
          duration: 0.8
        }}
      >

        {/* CARDS PART */}

        <Carousel>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >

        {teamDatas.map(({name, subtitle, text, image, website, space}, index) => {
          const Avatar = require(`../../assets/img/avatar/${image}.jpg`);
          return(

            <SwiperSlide>
              <IconContext.Provider value={{ color: 'var(--light-chocolate)', size: '2.3rem' }}>
                <ContainerSingle key={index} >
                  <Info space={space}>
                    <Name>{name}</Name>
                    <Divider></Divider>
                    <Subtitle>{subtitle}</Subtitle>
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
                  <Image src={Avatar} alt={name}/>  
                </ContainerSingle>
              </IconContext.Provider>
            </SwiperSlide>
          )
        })}

          </Swiper>
        </Carousel>
        {/* CARDS PART */}

      </motion.div>
      
        <div className="swipe-title">
          <MdOutlineSwipe />
          <h2 className="swipe-title__text">SWIPE</h2>
        </div>
    </Section>
  )
}

export default Team
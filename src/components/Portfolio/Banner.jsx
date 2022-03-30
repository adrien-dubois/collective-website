import { motion } from 'framer-motion';
import React from 'react'
import "./Styles/banner.scss"
import { BsMouse, BsArrowDownShort } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    }
  }
};

const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1
    }
  }
}

const Banner = () => {

  return (
    <motion.div 
      className="banner"
      variants={banner}
    >
      <BannerRowTop title={"Galerie"} />
      <BannerRowCenter title={"Portfolio"}/>
      <BannerRowBottom title={"Projets"} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title }) => (
  <motion.span 
    variants={banner} 
    initial='initial' 
    animate='animate' 
    className="row-title"
  >
    {[...title].map((letter) => (
      <motion.span 
        variants={letterAnimation}
        className="row-letter"
      >
          {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div className="row-col"
        initial= {{ opacity:0, y: 80 }}
        animate= {{ opacity: 1, y: 0 }}
        transition= {{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4
        }}
      >
        <span className="row-message">
          Voici une séléction de nos divers projets, qui pourront vous donner un apercu de notre travail en tant que Freelances.
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <IconContext.Provider value={{ size: '1.8rem' }}>
      <div className={"banner-row center bottom"}>
        <motion.div 
          className="scroll"
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition= {{ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1}}
        >
          <motion.span
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              delay: 1.8
            }}
          >
            
            <BsMouse/>

          </motion.span>
          <motion.span
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              delay: 1.8
            }}
          >
            <BsArrowDownShort/>

          </motion.span>
        </motion.div>
        <AnimatedLetters title={title} />
      </div>
    </IconContext.Provider>
  );
};

const BannerRowCenter = ({ title }) => {
  return (
    <div className={`banner-row center marquee`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};


export default Banner;
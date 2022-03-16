import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import "./Styles/banner.scss"

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
      <BannerRowTop title={"Portfolio"} />
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
          We are specialised in setting up the foundation of your brand and
          setting you up for success.
        </span>
      </motion.div>
    </div>
  );
};


export default Banner;
import React from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { FaArrowDown } from 'react-icons/fa';
import { IconContext } from "react-icons";

const move = keyframes`
  0% { transform:translateY(-5px); }
  50% { transform:translateY(5px) ; }
  100% { transform:translateY(-5px); }
`;

const Div = styled.div`
  animation: ${move} 4s ease infinite;
`;

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const ScrollForMore = () => {
  return (
    <IconContext.Provider value={{ color: 'var(--black-chocolate)' }}>
      <motion.div 
        initial={{opacity: 0, y: 60}}
        animate={{
          opacity: 1, 
          y: 40, 
          transition: { delay: 1.2, ...transition }
        }}
        className='scroll-for-more'
      >
        <Div className='icon'>
          <FaArrowDown size={30}/>
          <div className='text'>
            Scroll <br />
            pour lire
          </div>
        </Div>
      </motion.div>
    </IconContext.Provider>
  );
};

export default ScrollForMore;

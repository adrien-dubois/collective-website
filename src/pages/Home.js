import React from 'react'
import ProgressiveImage from 'react-progressive-image'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container, Main, Row } from '../components/General.components';
import { BsArrow90DegUp } from 'react-icons/bs'

const transition = { duration: .6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => {
  return (
    <>
      <Main>
        <Container>
          <Row className='center'>
            <div className='image-container'>
              <div
                className='thumbnail'
                ref={image}
                style={{
                  width: window.innerWidth > 1280 ? imageDetails.width : 500,
                  height: window.innerWidth > 1280 ? imageDetails.height : 400,
                }}>
                <div className='frame'>
                  <Link to={`/model/the-square`}>
                     <ProgressiveImage
                      src={require("../assets/img/home.png")}>
                      {(src) => <motion.img 
                      whileHover={{ scale: 1.1 }}
                      transition={transition}
                      src={src} 
                      alt='The Square.' 
                      />}
                    </ProgressiveImage>
                  </Link>
                </div>
              </div>
              <motion.div 
                exit={{opacity: 0}}
                transition={transition}
                className='information'
              >
                <div className='title'>Website creators</div>
                <div className='location'>
                  <span><BsArrow90DegUp size={30}/></span>
                  <span>Cliquez pour entrer</span>
                </div>
              </motion.div>
            </div>
          </Row>
        </Container>
      </Main>
    </>
  )
}

export default Home
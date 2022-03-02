import React from 'react'
import ProgressiveImage from 'react-progressive-image'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const transition = { duration: .6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => {
  return (
    <>
      <main>
        <div className='container'>
          <div className='row center'>
            <div className='image-container'>
              <div
                className='thumbnail'
                ref={image}
                style={{
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}>
                <div className='frame'>
                  <Link to={`/model/the-square`}>
                    <ProgressiveImage
                      src={require("../assets/img/home.jpg")}>
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
                <div className='title'>The Square.</div>
                <div className='location'>
                  <span>48.9184694</span>
                  <span>2.23679406</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
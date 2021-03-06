import React from 'react'
import { Section } from './Styles/Blog.elements'
import Title from './Title';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';
import { blogsAnimations } from 'Animation';
import { blogsData } from '../../datas/blogsData'


function Blog() {

  const [element, controls] = useScroll();



  return (
    <Section id='blog' ref={element}>
      <Title value="news"/>
      <div className="blogs">
        {
          blogsData.map(({titre, type, description, image}) => {
            return (
              <motion.div 
                className="blog"
                variants={blogsAnimations}
                animate={controls}
                transition={{
                  delay: 0.09,
                  type: 'tween',
                  duration: 0.8
                }}
              >
                <div className="image">
                  <img 
                    src={require(`../../assets/img/news/${image}`)} 
                    alt="placeholder" 
                  />
                </div> 
                <div className="title">
                  <h3 data-text={titre} >{titre}</h3>
                </div>
                <span className="type">{type}</span>
                <div className="description">
                  {description}  
                </div>
              </motion.div>
            );
          })
        }  
      </div>
    </Section>
  )
}

export default Blog
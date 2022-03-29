/*--- GSAP ---*/
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

/*--- REACT THINGS ---*/
import React, { useEffect } from 'react'
import Projects from './Projects'

/*--- STYLED COMPONENTS ---*/
import { 
  Div,
    SectionProject
} from './Styles/Home.elements'


const Home = () => {

  
  useEffect(() => {
    /*----  REGISTER PLUGIN ----*/
    gsap.registerPlugin(ScrollTrigger);

    const contains = gsap.utils.toArray('.section');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const initSectionAnimation = () => {
      
      // If prefers reduced motions, do nothing
      if (prefersReducedMotion.matches) return;

      contains.forEach((section) => {
        const heading = section.querySelector('.section__heading')
        const image = section.querySelector('.section__image')

        // set animation start state
        gsap.set(heading, {
          opacity: 0,
          y: 50
        })
        gsap.set(image, {
          opacity: 0,
          rotateY: 15
        })

        // Timeline section
        let sectionTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: () => 'top center',
            end: () => `+=${window.innerHeight}`,
            snap: 1 / (contains.length - 1),
            toggleActions: 'play reverse play reverse'
          }
        })

        // Add tween to TimeLine
        sectionTl.to(image, {
          opacity: 1,
          rotateY: -5,
          duration: 6,
          ease: 'elastic'
        })
        .to(heading, {
          opacity: 1,
          y: 0,
          duration: 2
        }, 0.5)
      })
    }

    initSectionAnimation();

  }, []);

  
    return (

      
      <Div id="contains">

          <SectionProject className='section' id='section_0' >
            <Projects projectNumber={0} />
          </SectionProject>

          <SectionProject className='section' id='section_1' >
            <Projects projectNumber={1} />
          </SectionProject>

          <SectionProject className='section' id='section_2' >
            <Projects projectNumber={2} />
          </SectionProject>

          <SectionProject className='section' id='section_3' >
            <Projects projectNumber={3} />
          </SectionProject>

          <SectionProject className='section' id='section_4' >
            <Projects projectNumber={4} />
          </SectionProject>

      </Div>
       
    )
  
}

export default Home;

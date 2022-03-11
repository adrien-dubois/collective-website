/*--- GSAP PART ---*/
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'
import ScrollTrigger from 'gsap/ScrollTrigger'

/*--- REACT THINGS ---*/
import React, { Component } from 'react'

/*--- STYLED COMPONENTS ---*/
import { 
    Container, 
    SectionHome, 
    SectionProject
} from './Styles/Home.elements'


export default class Home extends Component {

    componentDidMount(){

        /*----  REGISTER PLUGIN ----*/
        gsap.registerPlugin(ScrollTrigger, Draggable);

        const sections = gsap.utils.toArray('section');
        // Get the track marker & the links
        const track = document.querySelector('[data-draggable]');
        const navLinks = gsap.utils.toArray('[data-link]');
        
        // This to use the width of the last nav item 
        const lastItemWidth = () => navLinks[navLinks.length - 1].offsetWidth;
      
        // get the offset position of draggable element
        // also need to know the total scrollable height of the page
        const getUseableHeight = () => document.documentElement.offsetHeight - window.innerHeight;
      
        // calculate the total values the element can be dragged
        const getDraggableWidth = () => {
          return ((track.offsetWidth / 2) - lastItemWidth());
        }
    
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
        const updatePosition = () => {
          const left = track.getBoundingClientRect().left * -1;
          const width = getDraggableWidth();
          const useableHeight = getUseableHeight();
          const y = gsap.utils.mapRange(0, width, 0, useableHeight, left);
        
          st.scroll(y);
        }
         
        // now calculate x value in interpolation
        const tl = gsap.timeline()
        .to(track, {
          x: () => getDraggableWidth() * -1,
          ease: 'none'
        })
    
        // Create the Scroll Trigger instance , which will trigger the timeline animation
        const st = ScrollTrigger.create({
          animation: tl,
          scrub: 0,
        })
    
        
        
        // Now we’ll create a Draggable instance
        const draggableInstance = Draggable.create(track, {
          type: 'x',
          inertia: true,
    
          // set the bounds, otherwise the element could be dragged right off the screen
          bounds: {
            minX: 0,
            maxX: getDraggableWidth() * -1
          },
          edgeResistance: 1,
          onDragStart: () => st.disable(),
          onDragEnd: () => st.enable(),
          onDrag: updatePosition,
          onThrowUpdate: updatePosition
        })
    
        const initSectionAnimation = () => {
          // Do nothing if user prefers reduced motion 
          if (prefersReducedMotion.matches) return ;
    
          sections.forEach((section, index) => {
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
            const sectionTl = gsap.timeline({
              scrollTrigger: {
                trigger: section,
                start: () => 'top center',
                end: () => `+=${window.innerHeight}`,
                toggleActions: 'play reverse play reverse'
              }
            })
    
            // Adding tween to timeline
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
    
            // Adding a new timeline to add an active class to the nav link for the current section
            const sectionTl2 = gsap.timeline({
              scrollTrigger: {
                trigger: section,
                start: 'top 5px',
                end: () => `bottom top`,
                toggleActions: 'play none play reverse',
                onToggle: ({ isActive }) => {
                  const sectionLink = navLinks[index]
                  
                  if (isActive) {
                    sectionLink.classList.add('is-active')
                  } else {
                    sectionLink.classList.remove('is-active')
                  }
                }
              }
            })
    
          })
        }
    
        initSectionAnimation();
    
        // Allow navigation via keyboard 
        track.addEventListener('keyup', (e) => {
          const id = e.target.getAttribute('href')
          if (!id || e.key !== 'Tab') return
          
          const section = document.querySelector(id)
          const y = section.getBoundingClientRect().top + window.scrollY
          
          st.scroll(y)
        })
    
      }

  render() {
    return (
        <Container>

            <nav className="nav__projects">
                {/* POSITION ON THE TIMELINE */}
                <div className="marker"></div>

                {/* DRAGGABLE ELEMENT */}
                <div className="nav__projects__track" data-draggable>
                    <ul className="nav__projects__track__list">

                        {/* LINK */}
                        <li>
                            <a href="#section_0" className="nav__projects__track__list__link" data-link>
                                <span>
                                    Portfolio
                                </span>
                            </a>
                        </li>

                        {/* LINK */}
                        <li>
                            <a href="#section_1" className="nav__projects__track__list__link" data-link>
                                <span>
                                    Site Vitrine
                                </span>
                            </a>
                        </li>

                        {/* LINK */}
                        <li>
                            <a href="#section_2" className="nav__projects__track__list__link" data-link>
                                <span>
                                    E-Shop
                                </span>
                            </a>
                        </li>

                        {/* LINK */}
                        <li>
                            <a href="#section_3" className="nav__projects__track__list__link" data-link>
                                <span>
                                    Foodtruck
                                </span>
                            </a>
                        </li>

                        {/* LINK */}
                        <li>
                            <a href="#section_4" className="nav__projects__track__list__link" data-link>
                                <span>
                                    Blog
                                </span>
                            </a>
                        </li>

                        {/* LINK */}
                        <li>
                            <a href="#section_5" className="nav__projects__track__list__link" data-link>
                                <span>
                                    80's Flix
                                </span>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>

            <main>

                <SectionHome id="section_0" className='section'>
                    <div className="home">
                        <div className="content">
                            <div className="title">
                                <h1>Portfolio <br/>  The Square.</h1>
                            </div>
                            <div className="subtitle">
                                <p>
                                    Voici une sélection de nos projets, Nostrud in Lorem et non incididunt anim. Fugiat eu fugiat consequat labore sunt reprehenderit ut elit et sunt laborum. Ullamco nisi sint enim consequat consequat minim magna pariatur consectetur. Aute ullamco in magna cillum aliqua voluptate in consectetur consectetur. Do nisi voluptate sunt fugiat consectetur enim commodo veniam commodo. Cupidatat id occaecat consequat dolore ullamco quis dolor. Consectetur do adipisicing anim irure proident ad. Dolor fugiat irure ea ut veniam aliqua. Commodo in incididunt labore elit fugiat eiusmod nostrud nisi mollit excepteur. Elit est veniam ea ullamco est proident labore occaecat cupidatat eu aliquip laborum. Magna voluptate nisi ullamco Lorem culpa voluptate deserunt irure sit.
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionHome>

                <SectionProject className='section' id='section_1'>
                    Site vitrine
                </SectionProject>

                <SectionProject className='section' id='section_2'>
                    E-Shop
                </SectionProject>

                <SectionProject className='section' id='section_3'>
                    Foodtruck
                </SectionProject>

                <SectionProject className='section' id='section_4'>
                    Blog
                </SectionProject>

                <SectionProject className='section' id='section_5'>
                    80's Flix
                </SectionProject>

            </main>
        </Container>
    )
  }
}

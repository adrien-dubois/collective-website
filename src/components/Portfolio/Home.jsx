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
                            <a href="#home" className="nav__projects__track__list__link" data-link>
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

                <SectionHome id="index">
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
                    Section
                </SectionProject>

                <SectionProject className='section' id='section_2'>
                    Section
                </SectionProject>

                <SectionProject className='section' id='section_3'>
                    Section
                </SectionProject>

                <SectionProject className='section' id='section_4'>
                    Section
                </SectionProject>

            </main>
        </Container>
    )
  }
}

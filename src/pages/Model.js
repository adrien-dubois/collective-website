import React, {useEffect, useState} from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { languages, tools, design, certifs } from "../components/Pictos.js"

/*---- COMPONENT ----*/
import ScrollForMore from '../components/ScrollForMore'
import ScrollToTop from 'components/Collective/ScrollToTop.jsx';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };



const firstName = {
    animate: {
        transition: {
            delayChildren: .6,
            staggerChildren: .04,
            staggerDirection: -1,
        }
    }
}

const lastName = {
    animate: {
        transition: {
            delayChildren: .6,
            staggerChildren: .04,
            staggerDirection: 1,
        }
    }
}

const letter = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: {duration: 1, ...transition}
    }
}


const Model = ({imageDetails}) => {

    /*----- FOR SCALE THE IMAGE ON SCROLL -----*/
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1.1, 0]);

    const [canScroll, setCanScroll] = useState(false);

    useEffect (() => {
        if(canScroll === false){
            document.querySelector('body').classList.add("no-scroll");
        } else {
            document.querySelector('body').classList.remove("no-scroll");
        }
    }, [canScroll])

  return (
        <motion.div
            onAnimationComplete={() => setCanScroll(true)} 
            className='single'
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <ScrollToTop/>
            <div className='container fluid'>
                <div className='row center top-row'>
                <div className='top'>

                    {/* DETAILS TEXT */}
                    <motion.div 
                        initial={{ 
                            opacity: 0, 
                            y: 60 
                        }}
                        animate={{ 
                            opacity: 1, 
                            y: 40, 
                            transition: {delay: 1.2, ...transition} 
                        }}
                        className='details'
                    >
                        {/* COORDINATES */}
                        <div className='location'>
                            <span>48.9184694</span>
                            <span>2.23679406</span>
                        </div>
                        {/* TT TAG */}
                        <div className='mua'>TT: @squarelikekorea</div>
                    </motion.div>

                    {/* BIG TITLE */}
                    <motion.div className='model'>
                        <motion.span variants={firstName} className='first'>
                            <motion.span variants={letter} >T</motion.span>
                            <motion.span variants={letter} >h</motion.span>
                            <motion.span variants={letter} >e</motion.span>
                        </motion.span>
                        <motion.span variants={lastName} className='last'>
                            <motion.span variants={letter} >S</motion.span>
                            <motion.span variants={letter} >q</motion.span>
                            <motion.span variants={letter} >u</motion.span>
                            <motion.span variants={letter} >a</motion.span>
                            <motion.span variants={letter} >r</motion.span>
                            <motion.span variants={letter} >e</motion.span>
                            <motion.span variants={letter} >.</motion.span>
                        </motion.span>
                    </motion.div>


                </div>
                </div>
                <div className='row bottom-row'>
                <div className='bottom'>
                    <div className='image-container-single'>

                        {/* BIG IMAGE */}
                        <motion.div 
                            initial={{ 
                                y: '-40%',
                                width: window.innerWidth > 1280 ? imageDetails.width : 500,
                                height: window.innerWidth > 1280 ? imageDetails.height : 400,
                            }}
                            animate={{
                                y: 0,
                                width: "100%",
                                height: window.innerWidth > 1440 ? 650 : 450 ,
                                transition: {delay: 0.2, ...transition}
                            }}
                            className='thumbnail-single'>
                            <div className='frame-single'>
                                <motion.img
                                    src={require("../assets/img/home.jpg")} 
                                    alt='The Square'
                                    style={{ 
                                        scale: scale,
                                        opacity: opacity
                                    }} 
                                    initial={{ scale: 1.1 }}
                                    animate={{
                                        transition: {delay: 0.2, ...transition},
                                        y: window.innerWidth > 1440 ? -600 : -300,
                                    }} 
                                />
                            </div>
                        </motion.div>


                    </div>
                 </div>
                <ScrollForMore/>
               </div>
            </div>
            <div className='detailed-information'>
                <div className='container'>
                    <div className='row'>
                        <div className="stack-title">
                            <p>The Square.</p>
                            <h2>"Unique, performant, sécurisé, durable, évolutif…
                            <br/>    
                             Un site web sur-mesure permet un déploiement digital à fort potentiel." </h2>
                        </div>
                        <p>
                        Un site web sur-mesure va permettre de booster votre présence sur le web. Que ce soit en matière de design, de référencement ou encore d’ergonomie, tout est personnalisable pour créer un outil ajusté à vos besoins.
                        <br/>
                        Nous étudions avec vous les fonctionnalités à développer selon votre activité, vos objectifs et votre cible, et vous proposons un accompagnement tout au long du projet, en veillant à utiliser une communication efficace et accessible. 
                        <br/>
                        <a href='# '>En savoir plus…</a>
                        </p>
                    </div>
                </div>
                
                <div className="stack-content">

                    <div className='stack-content__div'>
                        <h2>Langages & Frameworks</h2>
                        <div className="stack-content__div__icons">
                                {languages.map((picto, index) => (
                                    <div className="stack-content__div__icons__pictos">
                                        <img 
                                            src={require(`../assets/img/pictos/${picto.src}`)}
                                            alt={picto.alt}
                                            index={index}
                                            width={100}
                                        />
                                    </div>
                                ))}
                        </div>
                        <hr className='separator' />
                    </div>

                    <div className='stack-content__div'>
                        <h2>Softwares & Tools</h2>
                        <div className="stack-content__div__icons">
                                {tools.map((picto, index) => (
                                    <div className="stack-content__div__icons__pictos">
                                        <img 
                                            src={require(`../assets/img/pictos/${picto.src}`)}
                                            alt={picto.alt}
                                            index={index}
                                            width={100}
                                        />
                                    </div>
                                ))}
                        </div>
                        <hr className='separator' />
                    </div>

                    <div className='stack-content__div'>
                        <h2>Web Design</h2>
                        <div className="stack-content__div__icons">
                                {design.map((picto, index) => (
                                    <div className="stack-content__div__icons__pictos">
                                        <img 
                                            src={require(`../assets/img/pictos/${picto.src}`)}
                                            alt={picto.alt}
                                            index={index}
                                            width={100}
                                        />
                                    </div>
                                ))}
                        </div>
                        <hr className='separator' />
                    </div>

                    <div className='stack-content__div'>
                        <h2>Certifications</h2>
                        <div className="stack-content__div__icons">
                                {certifs.map((picto, index) => (
                                    <div className="stack-content__div__icons__pictos">
                                        <img 
                                            src={require(`../assets/img/pictos/${picto.src}`)}
                                            alt={picto.alt}
                                            index={index}
                                            width={120}
                                        />
                                    </div>
                                ))}
                        </div>
                        <hr className='separator' />
                    </div>
                </div>


            </div>
        </motion.div>
  )
}

export default Model
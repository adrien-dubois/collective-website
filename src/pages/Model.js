import React, {useEffect, useState} from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

/*---- COMPONENT ----*/
import ScrollForMore from '../components/ScrollForMore'

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
                                y: '-50%',
                                width: imageDetails.width, 
                                height: imageDetails.height 
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
                                        y: window.innerWidth > 1440 ? -600 : -400,
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
                    <h2 className='title'>
                    The inspiration behind the artwork & <br /> what it means.
                    </h2>
                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia, looked up one of
                    the more obscure Latin words, consectetur, from a Lorem Ipsum
                    passage, and going through the cites of the word in classical
                    literature, discovered the undoubtable source. Lorem Ipsum comes
                    from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                    Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                    BC. This book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum, "Lorem
                    ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </div>
                </div>
            </div>
        </motion.div>
  )
}

export default Model
import React from 'react'
import { motion } from 'framer-motion'

/*---- COMPONENT ----*/
import ScrollForMore from '../assets/components/ScrollForMore'

const Model = () => {
  return (
    <div className="wrapp">
        <motion.div 
            className='single'
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <div className='container fluid'>
                <div className='row center top-row'>
                <div className='top'>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        className='details'
                    >
                        <div className='location'>
                            <span>48.9184694</span>
                            <span>2.23679406</span>
                        </div>
                        <div className='mua'>TT: @squarelikekorea</div>
                    </motion.div>
                    <div className='model'>
                        <span className='first'>
                            <span>T</span>
                            <span>h</span>
                            <span>e</span>
                        </span>
                        <span className='last'>
                            <span>S</span>
                            <span>q</span>
                            <span>u</span>
                            <span>a</span>
                            <span>r</span>
                            <span>e</span>
                            <span>.</span>
                        </span>
                    </div>
                </div>
                </div>
                <div className='row bottom-row'>
                <div className='bottom'>
                    <div className='image-container-single'>
                    <div className='thumbnail-single'>
                        <div className='frame-single'>
                        <img src={require("../assets/img/home.jpg")} alt='The Square' />
                        </div>
                    </div>
                    </div>
                </div>
                <ScrollForMore/>
                </div>
            </div>
            <div className='detailed-information'>
                <div className='container'>
                <div className='row'>
                    <h2 className='title'>
                    The insiration behind the artwork & <br /> what it means.
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
    </div>
  )
}

export default Model
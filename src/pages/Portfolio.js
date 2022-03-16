import ScrollToTop from 'components/Collective/ScrollToTop'
import Footer from 'components/Footer/Footer'
import Gallery from 'components/Portfolio/Gallery'
import Home from 'components/Portfolio/Home'
import Loader from 'components/Portfolio/Loader'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import "../components/Portfolio/Styles/banner.scss"



const Portfolio = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
      loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading")
    }, [loading]);

    var style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
    document.head.appendChild(style);

  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        {loading ? (
          <div>
            <Loader setLoading={setLoading}/>
          </div>
        ) : (
        <motion.div initial="hidden" animate="visible" >
          <ScrollToTop/>
          <Gallery/>
          {/* <Home /> */}
          {/* <Footer/> */}
        </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default Portfolio

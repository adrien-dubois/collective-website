import ScrollToTop from 'components/Collective/ScrollToTop'
import Footer from 'components/Footer/Footer'
import Home from 'components/Portfolio/Home'
import Loader from 'components/Portfolio/Loader'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'


const Portfolio = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading")
    }, [loading]);

    var style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
    document.head.appendChild(style);

  return (
    <>
      {loading ? (
        <div>
          <Loader setLoading={setLoading}/>
        </div>
      ) : (
      <motion.div initial="hidden" animate="visible" >
        <ScrollToTop/>
        <Home />
        <Footer/>
      </motion.div>
      )}
    </>
  );
}

export default Portfolio

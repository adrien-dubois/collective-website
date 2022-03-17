import React, { useEffect } from 'react'
import { Div } from './Styles/Loader.elements'

const Loader = ({ setLoading }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
      });
  return (
    <Div>
        <div className="loader-wrapper absolute">
          <h1>Portfolio</h1>
          <h2>The Square.</h2>
        </div>
    </Div>
  )
}

export default Loader
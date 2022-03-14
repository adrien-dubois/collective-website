import React, { useEffect } from 'react'
import { Div } from './Styles/Loader.elements'

const Loader = ({ setLoading }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
      });
  return (
    <Div>
        Loader
    </Div>
  )
}

export default Loader
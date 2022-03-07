import React from 'react'
import { Div } from './Styles/Title.elements'

function Title({value}) {
  return (
    <Div>
      <h1>{value}</h1>
    </Div>
  )
}

export default Title
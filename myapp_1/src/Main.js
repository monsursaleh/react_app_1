import React from 'react'
import Box from './Box'
import './Main.css'
const Main = () => {
  return (
    <div className="box-container">
      <Box name="Monsur" title="CEO" job="it" id="1st" />
      <Box name="Monsur" title="CEO" job="it" />
      <Box name="Monsur" title="CEO" job="it" />
    </div>
  )
}

export default Main

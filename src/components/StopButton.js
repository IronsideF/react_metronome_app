import React from 'react'

const StopButton = ({handleStop, playId}) => {

  
    return (
    <button onClick={handleStop}>⏹️</button>
  )
}

export default StopButton;
import React from 'react'

const RangeSlider = ({changeBpm}) => {
  
  const handleChange = (event) => {
    changeBpm(event.target.value)
  }
    return (
    <input type="range" name="metronome" id="metronome" min='40' max='200' onChange={handleChange} />
  )
}

export default RangeSlider;
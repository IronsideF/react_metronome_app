import React, {useEffect, useState} from 'react'
import RangeSlider from '../components/RangeSlider';


const MetronomeContainer = () => {
  
    const [bpm, setBpm] = useState(120)
    const [isPlaying, setIsPlaying] = useState(false)
    const [playID, setPlayID] = useState(null)
    const [sound, setSound] = useState('metronome-tempo-single-sound_G_major.wav')
  
    const changeBpm = (interval) => {
        setBpm(interval)
    }
    const changePlaying = () => {
        setIsPlaying(!isPlaying)
    }

    const handleSelect = (event) => {
        setSound(event.target.value)
    }


const interval = (60/bpm)*1000
const handlePlay = () => {
    setPlayID(setInterval(() => {
        const tick = new Audio(sound)
            tick.play();
        }, interval))
    changePlaying();}

useEffect(() => {
    if (isPlaying){
        clearInterval(playID)
        setPlayID(setInterval(() => {
        const tick = new Audio(sound)
            tick.play();
        }, interval))
        }
    }, [bpm, sound])
    
const handleStop = () => {
    clearInterval(playID)
    changePlaying();
};

    return (
    <>
        <RangeSlider changeBpm={changeBpm} />
        {isPlaying ? <button onClick={handleStop}>⏹️</button> : <button onClick={handlePlay}>▶</button>}
        <p>{bpm}</p>
        <select name="sound-select" id="sound-select" onChange={handleSelect}>
            <option value="'metronome-tempo-single-sound_G_major.wav'">Metronome</option>
            <option value="clap-hit-basic.wav">Clap</option>
            <option value="chime-shake-hit-metallic-hit_F_minor.wav">Chime</option>
            <option value="drill-drum-perc_B_minor.wav">Drum</option>
            <option value="lion-roar-sound-effect_90bpm.wav">Lion</option>
            <option value="9W6QBAU-church-bell.mp3">Church Bell</option>
            <option value="mixkit-cartoon-quick-splat-2890.wav">Fart</option>
            <option value="sfx-animal-cat3.mp3">Meow</option>
            <option value="FMCMMAB-whip.mp3">Whip</option>
        </select>
        
        {/* {isPlaying ? <StopButton handleStop={handleStop} playId={playId} /> : <PlayButton handlePlay={handlePlay} />} */}
        
    </>
  )
}

export default MetronomeContainer;
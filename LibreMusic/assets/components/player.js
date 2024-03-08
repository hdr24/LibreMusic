import '../styles/player.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './controls';
import Progress from './progress';
import DisplayTrack from './displaytrack';
import { useState, useRef } from 'react';
import { tracks } from '../data/tracks';


const Player = ( {currentTrack, setCurrentTrack, trackIndex, setTrackIndex} ) => {
   
    const audioRef = useRef();
    const progressRef = useRef()
    const [timeProgress, setTimeProgress] = useState(0)
    const [duration, setDuration] = useState(0)


    
    // A lot of props are passed down but not all are used, needs refactoring
if (currentTrack) {
    return (
        <div className='audio-player bg-dark fixed-bottom text-white'>
            <div className='content'>
                    <DisplayTrack
                    trackIndex={trackIndex}
                    currentTrack={currentTrack}
                    audioRef={audioRef}
                    progressRef={progressRef}
                    setDuration={setDuration}
                    next = {next}
                />
                <Controls
                    audioRef={audioRef}
                    progressRef={progressRef}
                    duration={duration}
                    setTimeProgress={setTimeProgress}
                    tracks={tracks}
                    trackIndex={trackIndex}
                    setCurrentTrack={setCurrentTrack}
                    setTrackIndex={setTrackIndex}
                    next = {next}
                />
                <Progress
                    progressRef={progressRef}
                    audioRef={audioRef}
                    timeProgress={timeProgress}
                    duration={duration}
                />
                    
            </div>
        </div>

    )
}

// needs refactoring
const next = () => {
    console.log('placeholder')
}
}

export default Player;
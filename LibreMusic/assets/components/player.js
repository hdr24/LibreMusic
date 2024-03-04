import '../styles/player.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './controls';
import Progress from './progress';
import DisplayTrack from './displaytrack';
import { useState, useRef } from 'react';
import { tracks } from '../data/tracks';


const Player = () => {
    const audioRef = useRef();
    const [currentTrack, setCurrentTrack] = useState(tracks[0])
    const [trackIndex, setTrackIndex] = useState(0)
    const progressRef = useRef()
    const [timeProgress, setTimeProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const onLoaded = () => { }

    const next = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0)
            setCurrentTrack(tracks[0])
        } else {
            setTrackIndex((prev) => prev + 1)
            setCurrentTrack(tracks[trackIndex + 1])
        }
    }



    return (
        <div className='audio-player'>
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

export default Player;
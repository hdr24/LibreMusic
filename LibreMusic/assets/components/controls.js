import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/controls.css'
import {
  // needs refactoring
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';


const Controls = ({ audioRef, progressRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack, next }) => {


  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime
    setTimeProgress(currentTime)
    progressRef.current.value = currentTime
    progressRef.current.style.setProperty(
      '--range-progress',
      `${(progressRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressRef, setTimeProgress]);


  // With the use effect we can check if the audio is playing or not and play it or pause it
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  return (
    <div className="controls-wrapper ">
      <div className="controls w-100 d-flex align-content-center text-center">
        {/* <button onClick={previous}>
          <IoPlaySkipBackSharp />
        </button> */}


        <button onClick={togglePlayPause} className='play btn btn-success'>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        {/* <button onClick={next}>
          <IoPlaySkipForwardSharp />
        </button> */}
      </div>
    </div>
  )
};

export default Controls;
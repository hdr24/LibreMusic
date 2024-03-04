import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/controls.css'
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';


const Controls = ({ audioRef, progressRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack, next }) => {


  
  const previous = () => { 
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  }
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

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  return (
    <div className="controls-wrapper">
      <div className="controls">
        <button onClick={previous}>
          <IoPlaySkipBackSharp />
        </button>


        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button onClick={next}>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
    </div>
  )
};

export default Controls;
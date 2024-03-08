import React from 'react';
import '../styles/progress.css'


const Progress = ({ progressRef, audioRef, timeProgress, duration }) => {
  
  // If we manually move the range slider the song currenTime will update 
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressRef.current.value
    console.log(progressRef.current.value)
  }

  // The ref gives us the time in seconds, we made a function to pass it to minutes and seconds

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  return (
    <div className='progress text-white d-flex content-align-between alignt-items-center w-100 mt-2'>
      
      <span className='current p-2'>{formatTime(timeProgress)}</span>
      <input type='range' ref={progressRef} onChange={handleProgressChange} defaultValue='0' className='range p-2' />
      <span className='length p-2'>{formatTime(duration)}</span>
    </div>
  );
};

export default Progress;
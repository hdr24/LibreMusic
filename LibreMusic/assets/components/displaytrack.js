import React from "react";

const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressRef, next }) => {
    const onLoaded = () => {
        const seconds = audioRef.current.duration
        setDuration(seconds)
        progressRef.current.max = seconds
    }
    return (
        <div>
            <audio src={currentTrack.audio} ref={audioRef} onLoadedMetadata={onLoaded} onEnded={next}/>
            <div className="info">
                <p className="title">{currentTrack.name}</p>
                <p className="author">{currentTrack.artist_name}</p>
            </div>
        </div>
    )
}
export default DisplayTrack;
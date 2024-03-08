import React from "react";
import '../styles/displaytrack.css'

const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressRef, next }) => {
    // when the metadata is loaded we update the duration of the song by taking it from the ref
    const onLoaded = () => {
        const seconds = audioRef.current.duration
        setDuration(seconds)
        progressRef.current.max = seconds
    }
    return (
        <div className="text-center">
            <audio src={currentTrack.audio} ref={audioRef} onLoadedMetadata={onLoaded} onEnded={next}/>
            <div className="info">
                <p className="title">{currentTrack.name}</p>
                <p className="author">{currentTrack.artist_name}</p>
            </div>
        </div>
    )
}
export default DisplayTrack;
import React from "react";
import '../styles/card.css'

const Card = ({ track, setCurrentTrack, setTrackIndex, index, data }) => {

    // Whenever we click on a play button the current track will be set to the index of the card we pressed
    // We use the index of the already fetched data so we don't have to do another fetch 
    const changeTrack = () => {
        setCurrentTrack(data.results[index])
        setTrackIndex(data.results[index])
    }
    return (
        <div className="col-3 p-3">
            <div class="card bg-dark text-white" id={index}>
                <img class="card-img-top p-3" src={track.image} alt="Card image" />
                <div class="card-body">
                    <h4 class="card-title">{track.name}</h4>
                    <p class="card-text">{track.artist_name}</p>
                    <a class="btn btn-primary w-100" onClick={() => changeTrack()}>Play</a>
                </div>
            </div>
        </div>
    )
}

export default Card
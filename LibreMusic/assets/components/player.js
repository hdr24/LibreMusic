import '../styles/player.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './controls';
import Progress from './progress';
import DisplayTrack from './displaytrack';
import { useState, useRef, useEffect } from 'react';
import { tracks } from '../data/tracks';


const Player = () => {
    const audioRef = useRef();
    const [currentTrack, setCurrentTrack] = useState(null)
    const [trackIndex, setTrackIndex] = useState(0)
    const progressRef = useRef()
    const [timeProgress, setTimeProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const onLoaded = () => { }

    const [data, setData] = useState(null);
    const [endpoint, setEndpoint] = useState('tracks')
   
    useEffect(() => {

        const apiKey = '94b55535';  // Replace with your actual API key
    const apiUrl = 'https://api.jamendo.com/v3.0/';
    
    // Replace 'endpoint' with the specific API endpoint you want to hit
    
    
    // Set up your request URL
    const requestUrl = `${apiUrl}${endpoint}/?client_id=${apiKey}&id=168`;

        let isMounted = true;
    
        const fetchData = async () => {
            try {
                const response = await fetch(`${requestUrl}`);
                const result = await response.json();
                
                if (isMounted) {
                    setData(result);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        
        return () => {
            isMounted = false;
        };
    }, [endpoint]);

    useEffect(() => {
        if (data) {
            setCurrentTrack(data.results[0])
        }
            
    }, [data])

    if (!data) {
        return (
            <div className="loading">
                <p>Loading...</p>
            </div>
        )
    }
    
    console.log(data.results)
    console.log(currentTrack)
if (currentTrack) {
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
    const next = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0)
            setCurrentTrack(tracks[0])
        } else {
            setTrackIndex((prev) => prev + 1)
            setCurrentTrack(tracks[trackIndex + 1])
        }
    }

    

    

}

export default Player;
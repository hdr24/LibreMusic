import React from "react";
import Player from "./components/player";
import { useState, useEffect } from "react";
import Card from "./components/card";
import Navbar from "./components/navbar";
import './styles/home.css'

const Home = () => {
    const [endpoint, setEndpoint] = useState('tracks') // needs refactoring
    const [data, setData] = useState(null)
    const [currentTrack, setCurrentTrack] = useState(null)
    const [trackIndex, setTrackIndex] = useState(0)
    const [offset, setOffset] = useState(0)
    const [searchData, setSearchData] = useState(null)
    useEffect(() => {

        const apiKey = '94b55535';  // Jamendo API user key
        const apiUrl = 'https://api.jamendo.com/v3.0/'; // The base of the API

        const requestUrl = `${apiUrl}/tracks/?client_id=${apiKey}&offset=${offset}&limit=20`;

        let isMounted = true;

        const fetchData = async () => {
            try {
                // if searchData is not set we do a normal fetch
                // if it is set we fetch what the user searched for
                // In both cases the daa variable is set to whatever the result was
                if (!searchData) {
                    const response = await fetch(`${requestUrl}`);
                    const result = await response.json();
                    if (isMounted) {
                        setData(result);
                    }
                } else {
                    const response = await fetch(`${requestUrl}&search=${searchData}`);
                    const result = await response.json();
                    if (isMounted) {
                        setData(result);
                    }
                }



            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [offset, searchData]); // This react effect is rendered only if offset or searchdata change


    // We cannot work with the data until the fetch is completed
    // We show a loading screen while we get the API response
    if (!data) {
        return (
            <div className="loading">
                <p>Loading...</p>
            </div>
        )
    }


    const clickHandler = (action) => {
        // We check if there is a 'next' field in the headers
        // This is a really useful field provided by the API that tells us if there are more songs or not
        if (action == 'next' && (data.headers.next)) {
            setOffset(offset + 10)
        }
        else if (offset != 0 && action == 'previous') {
            setOffset(offset - 10)
        }
    }

    function search(event) {
        // We prevent the submit from triggering a page reload
        event.preventDefault();

        const form = event.target;
        const searchField = form.elements['search'].value;
        // We set the offset to 0 so we get the first set of songs in the list
        setOffset(0)
        setSearchData(searchField)
    }

    return (
        <div className="home-container">
                <Navbar
                search={search}
                />

                <div className="row m-5 card-container">

                    {data.results.map(function (track, index) {
                        return (

                            <Card
                                track={track}
                                setCurrentTrack={setCurrentTrack}
                                setTrackIndex={setTrackIndex}
                                index={index}
                                data={data}
                            />

                        )
                    }
                    )}
         
            </div>
            <div className="buttons d-flex justify-content-center">
            <button onClick={() => clickHandler('previous')} className="btn btn-dark m-3" href='#'>Previous page</button>
            <button onClick={() => clickHandler('next')} className="btn btn-dark m-3" href='#'>Next page</button>
            </div>
            
            <Player
                currentTrack={currentTrack}
                setCurrentTrack={setCurrentTrack}
                trackIndex={trackIndex}
                setTrackIndex={trackIndex} />



        </div>
    )
}

export default Home;

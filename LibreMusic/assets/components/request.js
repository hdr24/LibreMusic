import React from "react";
import { useEffect } from "react";

useEffect(() => {
    const apiKey = '94b55535';  // Replace with your actual API key
    const apiUrl = 'https://api.jamendo.com/v3.0/';
    
    // Replace 'endpoint' with the specific API endpoint you want to hit
    const endpoint = 'tracks';
    
    // Set up your request URL
    const requestUrl = `${apiUrl}${endpoint}/?client_id=${apiKey}&id=168`;
    
    // Make the request
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => {
        if (data.results) {
            setCurrentTrack(data.results[0])
        }
    
      })
      .catch(error => {
        console.error('Error:', error);
      });
    })


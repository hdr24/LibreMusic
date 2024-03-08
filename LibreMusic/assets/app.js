import './styles/app.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
// We render the main Home component which is made up of our other components
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

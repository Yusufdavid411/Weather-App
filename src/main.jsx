import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloud, faCloudRain, faCoffee, faSearch, faWind } from '@fortawesome/free-solid-svg-icons';


// Add icons to the library
library.add(faCoffee, faSearch, faCloud, faCloudRain, faWind);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

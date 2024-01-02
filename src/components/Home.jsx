import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Home = () => {

    const [data, setData] = useState({
        celcius: 10,
        name:'London',
        humidity: 10,
        speed: 2,
        image: '',
    })

    const [name, setName] = useState('');

    // useEffect(()=> {
    //     const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=ghana&appid=aa0f20eeffe7d0bf570105ca31f6697e&units=metric';
    //     axios.get(apiUrl)
    //     .then(res => {
    //         setData({...data, celcius: res.data.main.temp, name: res.data.name, humidity: res.data.main.humidity, speed: res.data.wind.speed })
    //     })
    //     .catch( err => console.log(err));
    // }, [])

    const handleClick = () => {
        if(name !== ""){
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=aa0f20eeffe7d0bf570105ca31f6697e&units=metric`;
            axios.get(apiUrl)
            .then(res => {
                let imagePath = "";

                // if(res.data.weather[0].main == "Clouds") {
                //     imagepath = "/img/rainny.avif."
                // } else if (res.data.weather[0].main == "Clear") {
                //     imagepath = "/img/rainny.avif."
                // } else if (res.data.weather[0].main == "Rain") {
                //     imagepath = "/img/rainny.avif."
                // } else if (res.data.weather[0].main == "Drizzle") {
                //     imagepath = "/img/rainny.avif."
                // } else if (res.data.weather[0].main == "Mist") {
                //     imagepath = "/img/rainny.avif."
                // } else {
                //     imagepath = "/img/rainny.avif."
                // }

                if(res.data.weather[0].main == "Clouds") {
                    imagePath = <FontAwesomeIcon icon="cloud" size="8x" className="icon" />;
                } else if (res.data.weather[0].main == "Clear") {
                    imagePath = <FontAwesomeIcon icon="cloud" size="8x" className="icon" />;
                } else if (res.data.weather[0].main == "Rain") {
                    imagePath = <FontAwesomeIcon icon="cloud" size="8x" className="icon" />;
                } else if (res.data.weather[0].main == "Drizzle") {
                    imagePath = <FontAwesomeIcon icon="cloud" size="8x" className="icon" />;
                } else if (res.data.weather[0].main == "Mist") {
                    imagePath = <FontAwesomeIcon icon="cloud" size="8x" className="icon" />;
                } else {
                    imagePath = <FontAwesomeIcon icon="cloud" size="8x" className="icon" />;
                }

                setData({...data, 
                    celcius: res.data.main.temp, 
                    image: imagePath, 
                    name: res.data.name, 
                    humidity: res.data.main.humidity, 
                    speed: res.data.wind.speed 
                })
            })
            .catch( err => console.log(err));
        }else {
            alert('empty search')
        }
    }

    return (
        <div className='container'>
            <div className="weather">

                <div className="search">
                    <input type="search" name="" id="" placeholder='Enter City Name' onChange={e => setName(e.target.value)} />
                    <button>
                        <FontAwesomeIcon icon="search" size="4x" className="icon" onClick={handleClick} />
                    </button>
                </div>

                <div className="winfo">
                    <div className="winfo-icon">
                        {data.image}
                    </div>
                    <h1>{Math.round(data.celcius)} °C</h1>
                    <h2>{data.name}</h2>

                    <div className="details">

                        <div className="col">
                            {/* <img src="/img/uk_flag.jpg" alt="" /> */}
                            <FontAwesomeIcon icon="fa-sharp fa-water" rotation={180} className="icon" />
                            <div className="humidity">
                                <p>{Math.round(data.humidity)}%</p>
                                <p>Humidity</p>
                            </div> 
                        </div>

                        <div className="col">
                            <FontAwesomeIcon icon="fa-solid fa-wind" className="icon" />
                            <div className="wind">
                                <p>{Math.round(data.speed)} km/h</p>
                                <p>Wind</p>
                            </div>
                        </div>

                    </div>
                    
                </div>

            </div>
        </div>
    );
}
 
export default Home;  

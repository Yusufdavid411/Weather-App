import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';


const Home = () => {

    const [data, setData] = useState({
        celcius: 10,
        name:'London',
        humidity: 10,
        speed: 2,
    })

    useEffect(()=> {
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=ghana&appid=aa0f20eeffe7d0bf570105ca31f6697e&units=metric';
        axios.get(apiUrl)
        .then(res => {
            setData({...data, celcius: res.data.main.temp, name: res.data.name, humidity: res.data.main.humidity, speed: res.data.wind.speed })
        })
        .catch( err => console.log(err));
        
    }, [])

    return (
        <div className='container'>
            <div className="weather">

                <div className="search">
                    <input type="search" name="" id="" placeholder='Enter City Name' />
                    <button><img src="/img/uk_flag.jpg" alt="icon" /></button>
                </div>

                <div className="winfo">
                    <img src="/img/sunny.avif" alt="" className="icon" />
                    <h1>{data.celcius} °C</h1>
                    <h2>{data.name}</h2>
                    <div className="details">

                        <div className="col">
                            <img src="/img/uk_flag.jpg" alt="" />
                            <div className="humidity">
                                <p>{data.humidity}%</p>
                                <p>Humidity</p>
                            </div> 
                        </div>

                        <div className="col">
                            <img src="/img/uk_flag.jpg" alt="" />
                            <div className="wind">
                                <p>{data.wind} km/h</p>
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

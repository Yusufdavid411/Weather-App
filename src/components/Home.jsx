import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCloudShowersWater, faCloudBolt, faCloud } from '@fortawesome/free-solid-svg-icons';



const Home = () => {

    const [data, setData] = useState({
        celcius: 10,
        name:'City Name',
        humidity: 10,
        speed: 2,
        image: <FontAwesomeIcon icon="cloud" size="8x" className="icon" />,
    })

    const [name, setName] = useState('');
    const [error, setError] = useState('');


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
                    imagePath = <FontAwesomeIcon icon={faCloud} size="8x" style={{ color: 'white' }}  className="icon" />;
                } else if (res.data.weather[0].main == "Clear") {
                    imagePath = <FontAwesomeIcon icon={faCloudSun} size="8x" className="icon" />;
                } else if (res.data.weather[0].main == "Rain") {
                    imagePath = <FontAwesomeIcon icon="fa-solid fa-cloud-rain" size="8x" style={{ color: 'black' }} className="icon" />;
                } else if (res.data.weather[0].main == "Drizzle") {
                    imagePath = <FontAwesomeIcon icon={faCloudShowersWater} size="8x" className="icon" />;
                } else if (res.data.weather[0].main == "Mist") {
                    imagePath = <FontAwesomeIcon icon={faCloudBolt} size="8x" className="icon" />;
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
                setError('')

                // console.log(data)
            })
            .catch( err => {
                if(err.response.status == 404) {
                    setError("Invalid City Name")
                } else {
                    setError('')
                }
                console.log(err)
            });
        }else {
            alert('empty search')
        }
    }

    return (
        <div className='container'>
            <div className="weather">

                <div className="error">
                    <p>{error}</p>
                </div>

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

import React, {useState} from  "react";
import axios from "axios";

import FormattedDate from "./FormattedDate"

import "./Weather.css";

export default function Weather (props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse (response) {
        console.log(response.data);
        setWeatherData ({
            ready: true,
            city: response.data.name,
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
        });
    }

    if (weatherData.ready) {
        return(
            <div className="Weather">
                <form className="text-center">
                    <input type="search" className="Input-box" placeholder="Enter a city"
                    autoFocus="on"/>
                    
                    <input type="search" className="Search-button"value="Search" />
                </form>
                <div className="row">
                    <div className="col-6">
                        <h2 className="text-capitalize"> {weatherData.city}</h2>
                        <div className="Main-date"> 
                        <FormattedDate date={weatherData.date}/>
                        </div>
                        <img src={weatherData.icon} alt={weatherData.description} className="img-fluid"/>
                        <div className="Main-description text-capitalize"> {weatherData.description}</div>
                    </div>
                    <div className="col-6">
                        <span className="Main-temperature"> {Math.round(weatherData.temperature)}</span>
                        <span className="Main-unit">°C</span>
                        <div className="Main-details">
                            <span> Humidity: {weatherData.humidity}</span>
                            <span> %</span>
                            <div>
                            <span>Wind: {weatherData.wind}</span>
                            <span> km/h</span>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        )
    } else {
        const apiKey ="5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "Loading..."
    }   
}
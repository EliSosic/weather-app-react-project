import React, {useState} from  "react";
import axios from "axios";
import "./Weather.css";

export default function Weather () {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse (response) {
        console.log(response.data);
        setWeatherData ({
            ready: true,
            city: response.data.city,
            date: response.data.time,
            icon: response.data.condition.icon_url,
            description: response.data.condition.description,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
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
                        <div className="Main-date"> {weatherData.date}</div>
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
        const apiKey ="3c836392eab01t60930bboe42ecabfe4";
        let city ="Trieste";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "Loading..."
    }   
}
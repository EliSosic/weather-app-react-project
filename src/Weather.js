import React, {useState} from  "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather (props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse (response) {
        console.log(response.data);
        setWeatherData ({
            ready: true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            coord: response.data.coord
        });
    }

    function handleSubmit (event) {
       event.preventDefault();
       search();
    }

    function handleCityInput (event) {
        setCity(event.target.value);
    }

    function search() {
        const apiKey ="3dce9b1c66837262a25b3f448d354a76";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return(
            <div className="Weather">
                <form className="text-center" onSubmit={handleSubmit}>
                    <input type="search" className="Input-box" placeholder="Enter a city"
                    autoFocus="on"
                    onChange={handleCityInput}/>
                    
                    <input type="submit" className="Search-button"value="Search" />
                </form>
                <WeatherInfo data= {weatherData}/>   
                <WeatherForecast coord={weatherData.coord}/>
            </div>
        );
    } else {
        search();
        return "Loading..."
    }   
}
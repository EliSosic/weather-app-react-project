import React, {useState} from "react";
import axios from "axios";


import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props) {

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);


    function handleResponse (response) {
        setForecast (response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="row">
                {forecast.map(function(dailyForecast,index) {
                    if (index < 5) {
                        return (
                            <div className="col" key= {index}> 
                       <WeatherForecastDay data={dailyForecast} />
                    </div>   
                        );
                    }                    
                })}   
            </div>
        );
        
    } else {
        let apiKey = "3c949ba49d38be2487ee278e0d2d4059";
        let longitude = props.coord.lon;
        let latitude = props.coord.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return null;  
    }
}
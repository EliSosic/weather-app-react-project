import React from  "react";
import "./Weather.css";

export default function Weather () {
    return(
        <div className="Weather">
            <form className="text-center">
                <input type="search" placeholder="Enter a city"/>
                <input type="search" value="Search" />
            </form>

            <h2>Trieste</h2>
            
            <div className="row">
                <div className="col-6">
                    <div> 23.03.2024</div>
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="weather description"/>
                    <div> Mostly cloudy</div>
                </div>
                <div className="col-6">
                    <div className="Main-temperature"> 29°C</div>
                    <div className="Main-details">
                        <div> Humidity: 100%</div>
                        <div>Precipitation: 15%</div>
                        <div>Wind: 2 km/h</div>
                    </div>
                </div>
            </div>




        
        
        </div>
    )
}
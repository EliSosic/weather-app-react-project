import React from  "react";
import "./Weather.css";

export default function Weather () {
    return(
        <div className="Weather">
            <form className="text-center">
                <input type="search" className="Input-box" placeholder="Enter a city"/>
                <input type="search" className="Search-button"value="Search" />
            </form>
            <div className="row">
                <div className="col-6">
                    <h2> Trieste</h2>
                    <div className="Main-date"> 23.03.2024</div>
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="weather description" className="img-fluid"/>
                    <div className="Main-description"> Mostly cloudy</div>
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
            <hr/>
            <div>This project was made by Elisa Sosic , you can find it on {""}
                <a href="https://github.com/EliSosic/weather-app-react-project.git">Github</a> {""}
            and hosted on 
            <a href="https://weather-app-react-project-es.netlify.app/"> Netlify</a>

            </div>
        </div>
    )
}
import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
             <div className="row">
                    <div className="col-6">
                        <h2 className="text-capitalize"> {props.data.city}</h2>
                        <div className="Main-date"> 
                        <FormattedDate date={props.data.date}/>
                        </div>
                        <div className="img-fluid float-left">
                        <WeatherIcon code={props.data.icon} />
                        </div>
                        <div className="Main-description text-capitalize"> {props.data.description}</div>
                    </div>
                    <div className="col-6">
                        <span className="Main-temperature"> {Math.round(props.data.temperature)}</span>
                        <span className="Main-unit">°C</span>
                        <div className="Main-details">
                            <span> Humidity: {props.data.humidity}</span>
                            <span> %</span>
                            <div>
                            <span>Wind: {props.data.wind}</span>
                            <span> km/h</span>
                            </div>
                        </div>
                    </div>
                </div>          
        </div>
    );
}
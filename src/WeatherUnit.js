import React, {useState} from "react";

import "./WeatherUnit.css";

export default function WeatherUnit (props) {
    const [unit, setUnit] = useState("celsius");

    function showFarenheith (event) {
        event.preventDefault();
        setUnit("farenheith");
    }

    function showCelsius (event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
            <div>
                <span className="Main-temperature"> 
                {Math.round(props.celsius)}
                </span>
                <span className="Main-unit">
                    <span>
                        °C | <a href="/" onClick= {showFarenheith}> °F</a>
                    </span>
                </span>
            </div>
            );

    } else {
        let farenheith = (props.celsius * 9) / 5 + 32;
        return (
            <div>
                <span className="Main-temperature"> 
                {Math.round(farenheith)}
                </span>
                <span className="Main-unit">
                    <span>
                    <a href="/" onClick= {showCelsius}>°C </a> | °F
                    </span>
                </span>
            </div>
            );
    }
}
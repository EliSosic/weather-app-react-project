import React from "react";

import "./WeatherUnit.css";

export default function WeatherUnit (props) {
        return (
            <div>
                <span className="Main-temperature"> 
                {Math.round(props.celsius)}
                </span>
                <span className="Main-unit">
                    <span>
                        °C
                    </span>
                </span>
            </div>
            );
}
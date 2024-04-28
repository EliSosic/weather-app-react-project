import React from "react";
import Weather from "./Weather";
import './App.css';
import logo from "./weatherly-logo.png"


function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} alt="logo"/>
        <Weather defaultCity="Trieste"/>
        <hr/>
        <footer>
                <div>This project was made by Elisa Sosic , you can find it on {""}
                    <a href="https://github.com/EliSosic/weather-app-react-project.git">Github</a> {""}
                and hosted on 
                <a href="https://weather-app-react-project-es.netlify.app/"> Netlify</a>
                </div>
            </footer>
      </div>
    </div>
  );
}

export default App;

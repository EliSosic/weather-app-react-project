import React from "react";
import Weather from "./Weather";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center"> Minimal Weather app </h1>
        <Weather />
      </div>
    </div>
  );
}

export default App;

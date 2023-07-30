import React from "react";
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather defaultCity="San Francisco"/>
     </div>
     <div>
     <footer>This project was coded by Ronna Del Rosario and is <a href="https://github.com/RonLi5321/react-weather-app" target="_blank" rel="noreferrer"> open-sourced on GitHub.</a></footer>
    </div>
  </div>
  );
}
export default App;

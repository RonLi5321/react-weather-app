import React from "react";
import Weather from "./Weather";


import './App.css';

function App() {
  
  return (
  
    <div className="App">
      <div className="container">
        <h1>Chill Weather App</h1>
     <Weather defaultCity="Hayward"/>
     </div>
     <div>
     <footer>This project was coded by 
      <div className="profile"> <a className="git-hub" href="https://www.shecodes.io/graduates/49637-ronna-del-rosario" target="blank" rel="noreferrer">Ronna Del Rosario</a></div> and is <a href="https://github.com/RonLi5321/react-weather-app" target="_blank" rel="noreferrer"> open-sourced on GitHub.</a>
     <div className="attribute">Image by <a href="https://www.freepik.com/free-vector/gradient-lo-fi-illustrations_23784571.htm#query=lofi&position=45&from_view=keyword&track=sph" target="_blank" rel="noreferrer">Freepik</a></div></footer>
    </div>
  </div>
  );
  
  
}

export default App;

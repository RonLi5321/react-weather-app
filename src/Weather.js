import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";
import axios from "axios";
import  "./Weather.css";



export default function Weather(props) {
    const[weatherData, setWeatherData] = useState({ready: false});
    const[city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
    setWeatherData({
ready: true,
 coordinates: response.data.coord,
temperature: response.data.main.temp,
humidity:  response.data.main.humidity,
date: new Date(response.data.dt * 1000),
description: response.data.weather[0].description,
icon: response.data.weather[0].icon,
wind: response.data.wind.speed,
city: response.data.name
    });
}

function search(){
    const apiKey = `e947cb2640f1db92e6a19005bc43b435`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleCityChange(event){
    setCity(event.target.value);
}
if (weatherData.ready) {
    return ( 
        <div className="Weather">
          <form onSubmit={handleSubmit}>
  
         
              <div className="row">
                  <div className="col-3">
              <input type="search" placeholder="Enter a city . . " className="form-control" autoFocus="on" onChange={handleCityChange}/> 
              </div>
          <div className="col-2">
              <input type="submit" value="Search" className="search-button btn" />
  </div>
  </div>
          </form>
          <WeatherInfo data={weatherData}/>
          <WeatherForecast coordinates={weatherData.coordinates}/>
          </div>
          );
    } else {
search();

    return "Loading . ."
    }
}
import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import  "./Weather.css";



export default function Weather(props) {
    const[weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response){
    setWeatherData({
        ready: true,
temperature: response.data.main.temp,
humidity:  response.data.main.humidity,
date: new Date(response.data.dt * 1000),
description: response.data.weather[0].description,
wind: response.data.wind.speed,
city: response.data.name
    });
}
if (weatherData.ready) {
    return (
        <div className="Weather">
          
  
          <div className="container"><form>
              <div className="row">
                  <div className="col-9">
              <input type="search" placeholder="Enter a city . . " className="form-control"/> 
              </div>
          <div className="col-3">
              <input type="submit" value="Search" className="search-button btn btn-primary"/>
  </div>
  </div>
          </form>
            <div className="card">
              <div className="row">
              </div>
              <h1>San Francisco</h1>
              <div>
                <ul>
                <FormattedDate date={weatherData.date}/>
                  <li>Sunny</li>
                </ul>
              </div>
              <div>
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <div className="row">
                <div className="col-6">
                  <span className="f-temp">°F</span>
                  <span className="c-temp">°C</span>
                  <ul>
                    <li>Humidity: {weatherData.humidity} </li>
                    <li>Wind: {weatherData.wind} </li>
                  </ul>
                </div>
                <div className="col-6">
                <ul>
                    <li>Humidity: 71%</li>
                    <li>Wind: 14 MPH</li>
                  </ul>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
      );
    } else {

    const apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading . ."
    }
}
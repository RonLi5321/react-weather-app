import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){
    return (
    <div className="WeatherForecast">
        <div className="row d-flex justify-content-evenly">
       <div className="col-sm-2">
    <div className="card Weather-Forecast-day" >Sun  
       <WeatherIcon code="01d" size={32}/>
       <div className="Weather-Forecast-temperatures">
        <span className="Weather-Forecast-temp-max">70 </span>
        <span className="Weather-Forecast-temp-min">50</span>
    </div>
    </div>
    </div></div></div>
    );
}
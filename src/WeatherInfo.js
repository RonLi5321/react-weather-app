import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js"

export default function WeatherInfo(props){
    return ( 
    <div className="WeatherInfo">
         <h1>{props.data.city}</h1>
              <div>
                <ul>
                <FormattedDate date={props.data.date}/>
                  <li class="description">{props.data.description}</li>
                </ul>
              </div>
              <div>
                <WeatherIcon code={props.data.icon}/>
                <WeatherTemperature fahrenheit={props.data.temperature}/>
                  <ul>
                    <li>Humidity: {props.data.humidity} </li>
                    <li>Wind: {Math.round(props.data.wind)} km/hr</li>
                  </ul>
            </div>
            </div>
            );
}
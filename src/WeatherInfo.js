import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props){
    return ( 
    <div className="WeatherInfo">
         <h1>{props.data.city}</h1>
              <div>
                <ul>
                <FormattedDate date={props.data.date}/>
                  <li>Sunny</li>
                </ul>
              </div>
              <div>
                <span className="temperature">{Math.round(props.data.temperature)}</span>
                <div className="row">
                <div className="col-6">
                  <span className="f-temp">°F</span>
                  <span className="c-temp">°C</span>
                  <ul>
                    <li>Humidity: {props.data.humidity} </li>
                    <li>Wind: {props.data.wind} </li>
                  </ul>
                </div>
</div>
</div>
</div>)
}
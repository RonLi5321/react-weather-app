import React from "react";
import  "./Weather.css";


export default function Weather() {
    return (
      <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city . . " className="form-control"/> 
            </div>
        <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary"/>

            </div>
            </div>
        </form>

        <div className="container">
          <div className="card">
            <div className="row">
            </div>
            <h1>San Francisco</h1>
            <div>
              <ul>
                <li>Last Updated: Thursday at 18:00</li>
                <li>Sunny</li>
              </ul>
            </div>
            <div>
              <h1>66</h1>
              <div className="row">
              <div className="col-6">
                <span className="f-temp">°F</span>
                <span className="c-temp">°C</span>
                <ul>
                  <li>Humidity: 71%</li>
                  <li>Wind: 14 MPH</li>
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
  }
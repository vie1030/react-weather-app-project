import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "867dcf6bb3756e0001b67ad06b6f1ecd";
  let city = "Tokyo";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              autoFocus="on"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Tokyo</h1>
      <ul>
        <li>Sunday 10:30 am</li>
        <li>Sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Clear"
              className="float-left"
            />
            <span className="float-left">
              <span className="temperature">0</span>
              <span className="unit">°C</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 80%</li>
            <li>Wind: 10 km/h</li>
            <li>Feels like: -2°C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

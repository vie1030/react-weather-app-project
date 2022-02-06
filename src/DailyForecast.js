import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./DailyForecast.css";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "867dcf6bb3756e0001b67ad06b6f1ecd";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="DailyForecast mt-3">
      <div className="row">
        <div className="col-sm">
          <div className="day mb-1">Today</div>
          <div className="weatherIcon">
            <WeatherIcon code="01d" size={25} />
          </div>
          <div className="temp">
            <span className="temp-max">
              <strong>18°</strong>
            </span>
            <span className="temp-min">/3°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

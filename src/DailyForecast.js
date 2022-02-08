import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./DailyForecast.css";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="DailyForecast mt-3">
        <div className="row">
          <div className="col-sm">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "867dcf6bb3756e0001b67ad06b6f1ecd";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

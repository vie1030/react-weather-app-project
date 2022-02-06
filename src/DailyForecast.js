import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./DailyForecast.css";

export default function DailyForecast(props) {
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

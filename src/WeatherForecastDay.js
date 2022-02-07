import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="day mb-1">{day()}</div>
      <div className="weatherIcon">
        <WeatherIcon code={props.data[0].weather[0].icon} size={25} />
      </div>
      <div className="temp">
        <span className="temp-max">
          <strong>{maxTemperature}</strong>
        </span>
        <span className="temp-min">{minTemperature}</span>
      </div>
    </div>
  );
}

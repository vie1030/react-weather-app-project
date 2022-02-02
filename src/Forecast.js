import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />{" "}
              <span className="float-left">
                <WeatherTemperature celsius={props.data.temperature} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.feelsLike)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        {" "}
        <span className="temperature">
          {Math.round(props.celsius)}
          <span className="unit">
            °C |{" "}
            <a href="/" onClick={displayFahrenheit}>
              °F{" "}
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        {" "}
        <span className="temperature">
          {Math.round(fahrenheit())}
          <span className="unit">
            <a href="/" onClick={displayCelsius}>
              °C{" "}
            </a>
            | °F{" "}
          </span>
        </span>
      </span>
    );
  }
}

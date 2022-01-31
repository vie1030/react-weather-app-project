import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />

        <footer>
          This is{" "}
          <a
            href="https://github.com/vie1030/react-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub open-sourced
          </a>{" "}
          project coded by{" "}
          <a href="/" target="_blank" rel="noreferrer">
            Vie Santos
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

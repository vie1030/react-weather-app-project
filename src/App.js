import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />

        <footer className="text-end">
          This is{" "}
          <a
            href="https://github.com/vie1030/react-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub open-sourced
          </a>{" "}
          project coded by{" "}
          <a
            href="https://stupefied-liskov-3ef9b7.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Vie Santos
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://cocky-leakey-426fb0.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify.com.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mb-3 mt-5">Weather React App</h1>
        <button className="btn btn-primary">Hello</button>
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

import React, { useState } from "react";

import "./DailyForecast.css";

export default function DailyForecast(props) {
  return (
    <div className="DailyForecast mt-3">
      <div class="row">
        <div class="col-sm">
          <div class="day">Today</div>
          <div>🌞</div>
          <div class="temp">
            <strong>18°</strong>
            /3°
          </div>
        </div>
        <div class="col-sm">
          <div class="day">Sat</div>
          <div>⛅</div>
          <div class="temp">
            <strong>15°</strong>/2°
          </div>
        </div>
        <div class="col-sm">
          <div class="day">Sun</div>
          <div>⛅</div>
          <div class="temp">
            <strong>13°</strong>/3°
          </div>
        </div>
        <div class="col-sm">
          <div class="day">Mon</div>
          <div>🌞</div>
          <div class="temp">
            <strong>10°</strong>/8°
          </div>
        </div>
        <div class="col-sm">
          <div class="day">Tue</div>
          <div>⛅</div>
          <div class="temp">
            <strong>18°</strong>/6°
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Sun } from 'react-bootstrap-icons';

import ForecastHandler from "./handlers/forecastHandlers";

const CurrentWeather = (props) => {
  const currentWeather = props.data;
  const location = props.loc;

  return (
    <div className="weather-data">
      <ForecastHandler size={180} weather={currentWeather.shortForecast} />
      <p className="big-temp-text">{currentWeather.temperature}&#176;</p>
      <p>{currentWeather.shortForecast}</p>
      <p>day? {currentWeather.isDaytime ? "no" : "yes"}</p>
      <p>
        Winds {currentWeather.windSpeed} {currentWeather.windDirection}
      </p>
      <p>StartTime {currentWeather.startTime}</p>
      <h1>
        {location.city} , {location.state}
      </h1>
    </div>
  );
};

export default CurrentWeather;

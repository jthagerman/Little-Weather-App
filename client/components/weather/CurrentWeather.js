import React from "react";
import { Sun, Wind } from "react-bootstrap-icons";

import ForecastHandler from "./handlers/forecastHandlers";

const CurrentWeather = (props) => {
  const currentWeather = props.data;
  const location = props.loc;

  return (
    <div className="weather-data">
      <ForecastHandler size={180} weather={currentWeather.shortForecast} />
      <p className="big-temp-text">{currentWeather.temperature}&#176;</p>
      <p className="current-conditions">{currentWeather.shortForecast}</p>
      <p>
        {/* <span><Wind/>{currentWeather.windSpeed} {currentWeather.windDirection}</span> */}
      </p>
    </div>
  );
};

export default CurrentWeather;

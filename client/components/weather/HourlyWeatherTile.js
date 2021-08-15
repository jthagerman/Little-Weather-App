import React from "react";

import timeParser from "./handlers/timeHandler";
import ForecastHandler from "./handlers/forecastHandlers";

const HourlyWeatherTile = (props) => {
  let stateCode = props.location.state;
  let time = props.data.startTime;
  let adjustedTime = timeParser(time,stateCode)





  return (
    <div className="hourly-weather-tile">
      <h1>{adjustedTime}</h1>
      <h1>{props.data.temperature}</h1>
      <h1><ForecastHandler size={20} weather={props.data.shortForecast}/> </h1>
      <h1>{props.data.shortForecast}</h1>

    </div>
  );
};

export default HourlyWeatherTile;

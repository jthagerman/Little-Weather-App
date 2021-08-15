import React from "react";
import { Sun } from "react-bootstrap-icons";
import ForecastHandler from "./handlers/forecastHandlers";

const DailyWeatherModule = (props) => {
  return (
    <div className="dailyWeatherModule">
      <h1>{props.data.name}</h1>
      <h2>
        <ForecastHandler size={60} weather={props.data.forecast} />
      </h2>
      <h2>{props.data.high}</h2> <span class="invisble-when-big"> / </span>
      <h2>{props.data.low}</h2>
    </div>
  );
};
export default DailyWeatherModule;

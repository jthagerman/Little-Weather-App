import React from "react";
import HourlyWeatherTile from "./HourlyWeatherTile";

const Hourly = (props) => {

  let hourly = [];
  if (Array.isArray(props.weather.hourlyWeather)) {
    hourly = props.weather.hourlyWeather.slice(0, 36);
  }

  return (
    <section>
      <h1> Hourly Forecast </h1>
      <div>
        {hourly.map((element, index) => {
          return (
            <HourlyWeatherTile key={index} data={element} location={props.stateName}/>
          );
        })}
      </div>
    </section>
  );
};

export default Hourly;

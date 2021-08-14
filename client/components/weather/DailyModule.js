import React from "react";
import DailyWeatherModule from "./DailyWeatherTile";

const days = {
  Sunday: "Sun",
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
};

const DailyModule = (props) => {
  let weatherArray = props.weather || [];

  const simplifiedArray = [];
  weatherArray.forEach((element, index) => {
    if (index === 0) {
      simplifiedArray.push({
        name: "Today",
        high: element.temperature,
        forecast: element.shortForecast,
      });
    } else {
      if (element.name.includes("Night") || element.name.includes("Tonight")) {
        simplifiedArray[simplifiedArray.length - 1].low = element.temperature;
      } else {
        simplifiedArray.push({
          name: days[element.name],
          high: element.temperature,
          forecast: element.shortForecast,
        });
      }
    }
  });

  return (
    <div id="daily-weather-holder">
      {simplifiedArray.map((element, index) => {
        return <DailyWeatherModule key={index} data={element} />;
      })}
    </div>
  );
};

export default DailyModule;

import React from "react";
import { Doughnut } from "react-chartjs-2";
import reduceToType from "./handlers/hourWeatherTypeParser";

const RainDonut = React.memo((props) => {
  let hourly = [];

  if (Array.isArray(props.weather.hourlyWeather)) {
    if (props.slice) hourly = props.weather.hourlyWeather.slice(0, 36);
    else hourly = props.weather.hourlyWeather;
  }

  let array = reduceToType(hourly);

  const data = {
    labels: ["Clear", "Cloudy/Partly", "Precipitation"],
    datasets: [
      {
        label: "Hours",
        data: array,
        backgroundColor: [
          "rgba(50, 159, 153, 0.8)",
          "rgb(247, 78, 114,0.8)",
          "rgba(80, 34, 170, 0.8)",
        ],
        borderColor: [
          "rgba(50, 159, 153, 1)",
          "rgba(247, 78, 114,1)",
          "rgba(80, 34, 170, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div id="donut-box">
        <h1 className="donut-title">{props.title}</h1>
        <Doughnut data={data} width={500} height={500} />
      </div>
    </>
  );
});

export default RainDonut;

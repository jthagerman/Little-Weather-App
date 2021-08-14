import React from "react";
import { Line } from "react-chartjs-2";
import timeParser from "./handlers/timeHandler";

const options = {
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Chart = React.memo((props) => {
  let hourly = [];
  let stateName = props.stateName.state || "";

  if (Array.isArray(props.weather.hourlyWeather)) {
    hourly = props.weather.hourlyWeather.slice(0, 36);
  }

  let timeArray = [];
  let dataArray = [];

  hourly.map((element) => {
    timeArray.push(timeParser(element.startTime, stateName, false));
    dataArray.push(element.temperature);
  });

  const data = {
    labels: timeArray,
    datasets: [
      {
        label: "temperature",
        data: dataArray,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (<>
  <h1 className="chart-label">The Next 36 Hours</h1>
    <section className="line-chart-holder">
      {/* <div className="header">
        <h1 className="title">Next 36 Hours</h1>
      </div> */}
      <Line data={data} options={options} />
    </section>
    </>
  );
});

export default Chart;

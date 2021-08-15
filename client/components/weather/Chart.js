import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import timeParser from "./handlers/timeHandler";

const options = {
  plugins: {
    legend: {
      display: false,
    },
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
  const [selected, setSelected] = useState(36);
  let hourly = [];
  let weekly = [];
  let stateName = props.stateName.state || "";

  if (Array.isArray(props.weather.hourlyWeather)) {
    hourly = props.weather.hourlyWeather.slice(0, 36);
    weekly = props.weather.hourlyWeather;
  }

  let timeArray = [];
  let dataArray = [];
  let weeklyTimeArray = [];
  let weeklyDataArray = [];

  hourly.map((element) => {
    timeArray.push(timeParser(element.startTime, stateName, false));
    dataArray.push(element.temperature);
  });

  weekly.map((element) => {
    weeklyTimeArray.push(timeParser(element.startTime, stateName, false));
    weeklyDataArray.push(element.temperature);
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

  const weeklyData = {
    labels: weeklyTimeArray,
    datasets: [
      {
        label: "temperature",
        data: weeklyDataArray,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <>
      <h1 className="chart-label">Hourly Temperatures</h1>
      <section className="line-chart-holder">
        {selected === 36 ? (
          <Line data={data} options={options} />
        ) : (
          <Line data={weeklyData} options={options} />
        )}

        <div className="hourly-button-holder">
          {selected === 36 ? (
            <>
              {" "}
              <button
                style={{ backgroundColor: "#2b135c" }}
                onClick={() => setSelected(36)}
              >
                36 Hours
              </button>
              <button onClick={() => setSelected(7)}>7 days</button>
            </>
          ) : (
            <>
              {" "}
              <button onClick={() => setSelected(36)}>36 Hours</button>
              <button
                style={{ backgroundColor: "#2b135c" }}
                onClick={() => setSelected(7)}
              >
                7 days
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
});

export default Chart;

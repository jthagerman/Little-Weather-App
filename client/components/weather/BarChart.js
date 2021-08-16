import React from "react";
import { Bar } from "react-chartjs-2";

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAt: 50,
    },
  },
};

const BarChart = (props) => {
  let days = [];
  let highs = [];
  let lows = [];

  let data = props.weather || "";

  if (Array.isArray(data)) {
    let shouldPop = false;
    if (data[0].name === "Tonight") {
      data = data.slice(1);
      shouldPop = true;
    }
    data.forEach((element) => {
      if (
        !element.name.includes("Overnight") &&
        !element.name.includes("Night") &&
        !element.name.includes("Tonight")
      ) {
        highs.push(element.temperature);
        days.push(element.name);
      } else {
        lows.push(element.temperature);
      }
    });

    if (shouldPop === true) {
      highs.pop();
      days.pop();
    }
  }

  let averages = [];

  if (highs.length === lows.length) {
    highs.forEach((element, index) => {
      averages.push((element + lows[index]) / 2);
    });
  } else {
    lows.forEach((element, index) => {
      averages.push((element + highs[index]) / 2);
    });
  }

  let barData = {
    labels: days,
    datasets: [
      {
        type: "line",
        label: "Average",
        backgroundColor: "rgba(80, 34, 170, 0.8)",
        borderColor: "rgba(80, 34, 170, 0.8)",
        fill: false,
        data: averages,
      },
      {
        type: "bar",
        label: "Highs",
        backgroundColor: "rgb(247, 78, 114)",
        minBarLength: 2,
        data: highs,
      },
      {
        type: "bar",
        label: "Lows",
        backgroundColor: "rgb(50, 159, 153)",
        minBarLength: 2,
        data: lows,
      },
    ],
  };

  return (
    <>
      <h1 className="donut-label">Highs & Lows</h1>
      <Bar data={barData} options={options} />
    </>
  );
};

export default BarChart;

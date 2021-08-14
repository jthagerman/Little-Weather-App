import React from "react";

const Hourly = (props) => {
  let hourly = props.weather || [];
  hourly = hourly.slice(0, 36);
  return (
    <section>
      <h1> Hourly Forecast </h1>
      <div>
        {hourly.map((element, index) => {
          return (
            <div key={index}>
              <p>{element.name}</p>
              <p>{element.temperature}</p>
              <p>{element.shortForecast}</p>
              <p>{element.startTime}</p>
              <p>
                {element.windSpeed}, {element.windDirection}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hourly

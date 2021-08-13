import React from "react";
import { connect } from "react-redux";

class Hourly extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (Object.keys(this.props.weather).length === 0) {
      this.props.history.push("/");
    }
  }

  render() {
    {
      let hourly = this.props.weather || [];
      hourly = hourly.slice(0, 36);

      return (
        <div>
          {hourly.map((element, index) => {
            return (
              <div key={index}>
                <p>Fore{element.name}</p>
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
      );
    }
  }
}

const mapState = (state) => {
  return {
    weather: state.weatherReducer.hourlyWeather,
  };
};

export default connect(mapState, null)(Hourly);

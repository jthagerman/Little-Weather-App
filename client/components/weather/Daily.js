import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Daily extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (Object.keys(this.props.weather).length === 0) {
      this.props.history.push("/");
    }
  }
  render() {
    let weatherArray = this.props.weather || [];
    return (
      <div>
        {weatherArray.map((element, index) => {
          return (
            <div key={index}>
              <p>Fore{element.name}</p>
              <p>{element.temperature}</p>
              <p>{element.shortForecast}</p>
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

const mapStateToProp = (state) => {
  return {
    weather: state.weatherReducer.forecast,
    state: state,
  };
};
export default withRouter(connect(mapStateToProp, null)(Daily));

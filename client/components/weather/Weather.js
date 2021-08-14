import React from "react";
import { connect } from "react-redux";
import { getCurrentWeatherThunk } from "../../store/weather";
import { Link } from "react-router-dom";
import CurrentWeather from "./CurrentWeather";
import DailyModule from "./DailyModule";
import Hourly from "./Hourly";
import LoadingModule from "./handlers/loadingModule";
import ErrorLoadingPage from "./handlers/ErrorLoadingPage";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      selected: "now",
    };
    this.handleSwitches = this.handleSwitches.bind(this);
  }

  componentDidMount() {
    try {
      if (this.props.history.location.state.data) {
        let location = this.props.location.state.data;
        this.props.getWeather(location.lat, location.lng);
        this.setState({ loading: true });
      }
    } catch (error) {
      console.log("i am going to have to get location data from somewhere");
      this.setState({ error: true });
    }
  }

  componentDidUpdate(previousProps) {
    if (previousProps.weather) {
      if (previousProps.weather.forecast !== this.props.weather.forecast) {
        this.setState({ loading: false });
        if (this.props.weather.forecast === "error") {
          this.setState({ error: true });
        }
      }
    }
  }

  handleSwitches(event) {
    event.preventDefault();
    const selected = event.target.getAttribute("name");

    switch (selected) {
      case "hourly":
        this.setState({ selected: "hourly" });
        break;
      case "now":
        this.setState({ selected: "now" });
        break;
      case "10-day":
        this.setState({ selected: "10-day" });
        break;
      default:
        return;
    }
  }

  render() {
    let currentWeather = this.props.weather.now || [];

    return (
      <>
        <>
          {this.state.error === true ? (
            <ErrorLoadingPage />
          ) : (
            <div>
              {this.state.loading === true ? (
                <LoadingModule />
              ) : (
                <>
                  <div className="location-headline">
                    {this.props.weather.location.city},{" "}
                    {this.props.weather.location.state}
                  </div>
                  <section className="hero">
                    {this.state.selected === "10-day" ? (
                      <div className="seven-day">
                        <DailyModule weather={this.props.weather.forecast} />
                      </div>
                    ) : (
                      <>
                        {this.state.selected === "hourly" ? (
                          <span>Hourly</span>
                        ) : (
                          <CurrentWeather
                            data={currentWeather}
                            loc={this.props.weather.location}
                          />
                        )}
                      </>
                    )}
                  </section>
                  <div id="toggle-holder">
                    <button
                      className="toggle"
                      name="now"
                      onClick={(event) => this.handleSwitches(event)}
                    >
                      Now
                    </button>
                    <button
                      className="toggle"
                      name="10-day"
                      onClick={(event) => this.handleSwitches(event)}
                    >
                      7-day
                    </button>
                  </div>
                  <Hourly weather={this.props.weather.hourly} />
                </>
              )}
            </div>
          )}
        </>
      </>
    );
  }
}
const mapState = (state) => {
  return {
    weather: state.weatherReducer,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getWeather: (lat, lon) => dispatch(getCurrentWeatherThunk(lat, lon)),
  };
};

export default connect(mapState, mapDispatch)(Weather);

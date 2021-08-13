import React from "react";
import { connect } from "react-redux";
import { getCurrentWeatherThunk } from "../../store/weather";
import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import CurrentWeather from "./CurrentWeather";
import DailyModule from "./DailyModule";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

class Weather extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      loading: false,
      error: false,
      selected: "now",
    };
    this.handleSwitches = this.handleSwitches.bind(this);
    // console.log(this.props.history.location.state.data);
    //const data = this.props.history.location.state.data
    //console.log(data, "here is the data")
  }

  componentDidMount() {
    console.log("i am mounted");
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
    console.log(this.state.selected);
  }

  render() {
    let currentWeather = this.props.weather.now || [];
    if (currentWeather.length > 1) {
      // currentWeather = c
    }

    return (
      <>
        <section className="hero">
          {this.state.error === true ? (
            <div>Error Loading Page</div>
          ) : (
            <div>
              {this.state.loading === true ? (
                <p>
                  <h1 style={{ fontSize: "50px", textAlign: "center" }}>
                    Loading
                  </h1>{" "}
                  <ClipLoader
                    color="ffffff"
                    loading="ffffff"
                    css={override}
                    size={200}
                  />
                </p>
              ) : (
                <>
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
                </>
              )}
            </div>
          )}
        </section>
        <div id="toggle-holder">
          {/* <button
         name="hourly"
         onClick={(event) => this.handleSwitches(event)}
       >
         Hourly */}
          {/* </button> */}
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

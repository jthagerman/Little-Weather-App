import React from "react";
import { connect } from "react-redux";
import { getCurrentWeatherThunk } from "../store/weather";
import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { Sun } from 'react-bootstrap-icons';


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
    };
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
    console.log("update");
    if (previousProps.weather) {
      if (previousProps.weather.forecast !== this.props.weather.forecast) {
        this.setState({ loading: false });
        if (this.props.weather.forecast === "error") {
          this.setState({ error: true });
        }
      }
    }
  }

  render() {
    let currentWeather = this.props.weather.now || [];
    if (currentWeather.length > 1) {
      // currentWeather = c
    }

    return (
      <section>
        {this.state.error === true ? (
          <div>Error Loading Page</div>
        ) : (
          <div>
            {this.state.loading === true ? (
              <p>
                <h1>Loading</h1> <ClipLoader color="ffffff" loading="ffffff" css={override} size={200} /></p>
            ) : (
              <div className="weather-data">
                <Sun size={180}/>
                <p className="big-temp-text">{currentWeather.temperature}&#176;</p>
                <p>{currentWeather.shortForecast}</p>
                <p>day? {currentWeather.isDaytime ? "no" : "yes"}</p>
                <p>
                  Winds {currentWeather.windSpeed}{" "}
                  {currentWeather.windDirection}
                </p>
                <p>StartTime {currentWeather.startTime}</p>
                <h1>{this.props.weather.location.city} , {this.props.weather.location.state}</h1>
              </div>
            )}
          </div>
        )}
      </section>
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

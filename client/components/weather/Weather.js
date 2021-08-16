import React from "react";
import { connect } from "react-redux";
import { getCurrentWeatherThunk } from "../../store/weather";
import { setLocation } from "../../store/location";
import { Link } from "react-router-dom";
import CurrentWeather from "./CurrentWeather";
import DailyModule from "./DailyModule";
import Hourly from "./Hourly";
import LoadingModule from "./handlers/LoadingModule";
import ErrorLoadingPage from "./handlers/ErrorLoadingPage";
import Chart from "./Chart";
import RainDonut from "./RainDonut";
import BarChart from "./BarChart";
import { StarFill, Star } from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";
import { setFavoritesThunk, deleteFavoriteThunk } from "../../store/favorites";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      selected: "now",
      favorited: false,
    };
    this.handleSwitches = this.handleSwitches.bind(this);
    this.handleFavorites = this.handleFavorites.bind(this);
    this.removeFavorites = this.removeFavorites.bind(this);
  }

  componentDidMount() {
    try {
      if (this.props.history.location.state.data) {
        let location = this.props.location.state.data;

        this.props.setLocation(this.props.history.location.state.data);
        this.props.getWeather(location.lat, location.lng);
        this.setState({ loading: true });
      }
      if (this.props.favorites && this.props.theLocation) {
        let currentCity = this.props.theLocation.zip;
        let favoritesList = this.props.favorites;
        favoritesList.forEach((element) => {
          if (element.zip === currentCity) {
            this.setState({ favorited: true });
          }
        });
      }
    } catch (error) {
      console.log("NO WEATHER DATA");
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
    if (previousProps.favorites != this.props.favorites) {
      let currentCity = this.props.theLocation.zip;
      let favoritesList = this.props.favorites;
      favoritesList.forEach((element) => {
        if (element.zip === currentCity) {
          this.setState({ favorited: true });
        }
      });
    }

    if(previousProps.theLocation !== this.props.theLocation) {
      const currentZip = this.props.theLocation.zip
      this.props.favorites.forEach((element) => {
        if(element.zip === currentZip) this.setState({favorited: true})
      })

    }
  }
  removeFavorites() {
    toast.dark(
      `${this.props.theLocation.city} Was Removed From Your Favorites`,
      {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      }
    );
    this.props.deleteFavorite(this.props.theLocation.zip, this.props.auth.id);
    this.setState({ favorited: false });
  }

  handleFavorites() {
    toast.dark(`${this.props.theLocation.city} Was Added To Your Favorites`, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
    this.props.addFavorite(this.props.theLocation, this.props.auth.id);
    this.setState({ favorited: true });
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
                    {Object.keys(this.props.auth).length === 0 ? (
                      <span></span>
                    ) : (
                      <span>
                        {this.state.favorited === true ? (
                          <StarFill
                            onClick={() => this.removeFavorites()}
                            className="favorite-star"
                            size={35}
                          />
                        ) : (
                          <Star
                            onClick={() => this.handleFavorites()}
                            className="favorite-star"
                            size={35}
                          />
                        )}
                      </span>
                    )}

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
                  <Chart
                    weather={this.props.weather}
                    stateName={this.props.weather.location}
                  />
                  <section className="donut-holder">
                    <h1 className="donut-label">
                      Hourly Precipitation Chances
                    </h1>
                    <div id="donut-row">
                      <RainDonut
                        weather={this.props.weather}
                        slice={true}
                        title={"36 hours"}
                      />
                      <RainDonut
                        weather={this.props.weather}
                        slice={false}
                        title={"7 days"}
                      />
                    </div>
                  </section>
                  <section className="bar-holder">
                    <BarChart weather={this.props.weather.forecast} />
                  </section>
                  <div id="space"></div>

                  {/* <Hourly
                    weather={this.props.weather}
                    stateName={this.props.weather.location}
                  /> */}
                </>
              )}
              <ToastContainer />
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
    auth: state.auth,
    theLocation: state.locationReducer.location,
    favorites: state.favoritesReducer.favorites,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getWeather: (lat, lon) => dispatch(getCurrentWeatherThunk(lat, lon)),
    setLocation: (location) => dispatch(setLocation(location)),
    addFavorite: (data, user) => dispatch(setFavoritesThunk(data, user)),
    deleteFavorite: (zip, user) => dispatch(deleteFavoriteThunk(zip, user)),
  };
};

export default connect(mapState, mapDispatch)(Weather);

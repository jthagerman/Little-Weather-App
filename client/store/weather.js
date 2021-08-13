

import axios from "axios";


const initialState = {hourlyWeather: {}, forecast: {}, now: {}, location: {} }

const GET_CURRENT_WEATHER = "GET_CURRENT_WEATHER"

export const getCurrentWeather = (weekly, hourly,location) => {
  if(weekly === "error") {
    return {
      type: GET_CURRENT_WEATHER,
      hourly: "error",
      forecast: "error",
      now: "error",
      location: "error"
    }
  }
  else {
    return {
      type: GET_CURRENT_WEATHER,
      hourly: hourly,
      forecast: weekly,
      now: hourly[0],
      location: location
    }

  }

}

export const getCurrentWeatherThunk = (lat,lng) => {
  return async ( dispatch) => {
    try{
      const weather = await axios.get(`https://api.weather.gov/points/${lat},${lng}`)
      const weatherData = weather.data.properties
      let location = {city: weatherData.relativeLocation.properties.city, state:weatherData.relativeLocation.properties.state }
      const weeklyCall = weatherData.forecast
      const hourlyCall = weatherData.forecastHourly
      const weekly = await axios.get(weeklyCall)
      const hourly = await axios.get(hourlyCall)

      dispatch(getCurrentWeather(weekly.data.properties.periods, hourly.data.properties.periods,location));

    }catch(error){
      console.error(error, "cannot load data")
      dispatch(getCurrentWeather("error"))
    }
  }
}


export default function weatherReducer(state = initialState, action ){

  switch(action.type) {
    case GET_CURRENT_WEATHER: {
      return{ ...state, hourlyWeather: action.hourly, forecast: action.forecast, now: action.now, location: action.location}
    }
    default:
    return state;
  }

}

import axios from "axios";

const initialState = {
  favorites: [],
  weather: [],
};
const SET_FAVORITE = "SET_FAVORITE";
const ADD_FAVORITE = "ADD_FAVOITE";
const DELETE_FAVORITE = "DELETE_FAVORITE";
const CLEAR = "CLEAR";

export const setFavorite = (data) => {
  return {
    type: SET_FAVORITE,
    data,
  };
};

export const deleteFavorite = (zip) => {
  return {
    type: DELETE_FAVORITE,
    zip,
  };
};

export const addFavorite = (data) => {
  return {
    type: ADD_FAVORITE,
    data,
  };
};
export const clearFavorites = () => {
  return {
    type: CLEAR,
  };
};

export const deleteFavoriteThunk = (zip, user) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/users/favorites/${zip}/${user}`);
      dispatch(deleteFavorite(zip));
    } catch (error) {
      console.error(error);
    }
  };
};

export const setFavoritesThunk = (location_data, user) => {
  return async (dispatch) => {
    try {
      const location = await axios.post("/api/users/favorites", {
        params: { query: location_data, user: user },
      });
      dispatch(addFavorite(location.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const setAllFavoritesThunk = (user) => {
  return async (dispatch) => {
    try {
      let allFavorites = await axios.get("api/users/favorites", {
        params: { userId: user },
      });
      allFavorites = allFavorites.data;

      for (const fav in allFavorites) {
        try {
          let element = allFavorites[fav];
          const weather = await axios.get(
            `https://api.weather.gov/points/${element.lat},${element.lng}`
          );
          const weatherData = weather.data.properties;
          const weeklyCall = weatherData.forecast;
          const weekly = await axios.get(weeklyCall);
          let temp = weekly.data.properties.periods[0].temperature;
          element.temp = temp;
        } catch (error) {
          console.log("failed to load fav temp");
        }
      }

      dispatch(setFavorite(allFavorites));
    } catch (error) {
      console.error(error);
    }
  };
};

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FAVORITE:
      return { ...state, favorites: action.data };
    case DELETE_FAVORITE:
      let zipcode = action.zip;
      let list = state.favorites;
      let lindex = null;
      list.forEach((element, index) => {
        if (element.zip === zipcode) lindex = index;
      });
      let listState = list.slice(0, lindex);
      let listEnd = list.slice(lindex + 1);

      return { ...state, favorites: [...listState, ...listEnd ]};
    case ADD_FAVORITE:
      let updateFavorites = state.favorites;
      updateFavorites.push(action.data);
      return { ...state, favorites: updateFavorites };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
}

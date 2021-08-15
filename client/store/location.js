import axios from "axios";

const SET_LOCATION = "SET_LOCATION";
const SEARCH_LOCATION = "SEARCH_LOCATION";
const FETCH_RANDOM = "FETCH_RANDOM";

const initialState = { location: "", searchResults: [] };

export const setLocation = (locationData) => {
  return {
    type: SET_LOCATION,
    location: locationData,
  };
};

export const searchLocation = (searchResults) => {
  return {
    type: SEARCH_LOCATION,
    results: searchResults,
  };
};

export const fetchRandomThunk = () => {
  return async (dispatch) => {
    try {
      const location = await axios.get("/api/locations/random"
      );
      const locationData = location.data;
      dispatch(setLocation(locationData));
    } catch (error) {
      console.error(error);
    }
  };
};
export const searchLocationThunk = (query) => {
  return async (dispatch) => {
    try {
      const location = await axios.get("/api/locations/", {
        params: { query: query },
      });
      const locationData = location.data;
      dispatch(searchLocation(locationData));
    } catch (error) {
      console.error(error);
    }
  };
};

export const setLocationThunk = (zipCode) => {
  return async (dispatch) => {
    try {
      const location = await axios.get(`/api/locations/${zipCode}`);
      const locationData = location.data;
      dispatch(setLocation(locationData));
    } catch (error) {
      console.error(error);
    }
  };
};

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, location: action.location };
    case SEARCH_LOCATION:
      return { ...state, searchResults: action.results };
    default:
      return state;
  }
}

import { SET_SEARCH_RESULTS } from "../constants/constants";
import data from "../data/data";

export const setResults = payload => {
  console.log(payload);
  return { type: SET_SEARCH_RESULTS, payload };
};

export const searchResults = (from, to) => {
  let results = data.female;
  return dispatch => {
    dispatch(setResults(results));
  };
};

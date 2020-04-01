import { SET_SEARCH_RESULTS } from "../constants/constants";
import data from "../data/data";

export const setResults = payload => {
  return { type: SET_SEARCH_RESULTS, payload };
};

const getRandomNumBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const searchResults = (from, to) => {
  let size = getRandomNumBetween(8, 18);
  let results = [];
  for (let i = 0; i < size; i++) {
    results.push({
      name: `${data.firstNames[getRandomNumBetween(0, 60)]} ${
        data.surnames[getRandomNumBetween(0, 50)]
      }`,
      from,
      to,
      rating: getRandomNumBetween(1, 5),
      eta: getRandomNumBetween(1, 10)
    });
  }
  results.sort((a, b) => {
    return a.eta - b.eta;
  });
  console.log(results[0].rating);
  return dispatch => {
    dispatch(setResults(results));
  };
};

import { SET_SEARCH_RESULTS } from "../constants/constants";
const initialState = [];

export default (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case SET_SEARCH_RESULTS:
      state = [...payload];
      break;
    default:
      return state;
  }
  console.log(state);
  return state;
};

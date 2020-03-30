import { SET_SHOW_TOAST } from "../constants/constants";

const initialState = false;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SHOW_TOAST:
      state = payload;
      break;
    default:
      return state;
  }
  return state;
};

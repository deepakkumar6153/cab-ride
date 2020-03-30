import { SET_IS_LOGGEDIN } from "../constants/constants";

const initialState = false;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_IS_LOGGEDIN:
      state = payload;
      break;
    default:
      return state;
  }
  return state;
};

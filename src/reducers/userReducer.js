import { SET_USER_INFO } from "../constants/constants";

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_INFO:
      state = { ...payload };
      break;
    default:
      return state;
  }
  return state;
};

import { SET_TOAST_INFO } from "../constants/constants";

const initialState = {
  show: false,
  type: "success",
  message: "Success !!"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOAST_INFO:
      state = { ...initialState, ...payload };
      break;
    default:
      return state;
  }
  return state;
};

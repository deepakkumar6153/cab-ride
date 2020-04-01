import { SET_TOAST_INFO } from "../constants/constants";

export const setToastInfo = toastInfo => {
  return { type: SET_TOAST_INFO, payload: toastInfo };
};

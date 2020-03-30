import { SET_SHOW_TOAST } from "../constants/constants";

export const setShowToast = showToast => {
  return { type: SET_SHOW_TOAST, payload: showToast };
};

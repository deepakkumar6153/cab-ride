import { SET_USER_INFO, SET_IS_LOGGEDIN } from "../constants/constants";

export const setUserInfo = loginInfo => {
  return { type: SET_USER_INFO, payload: loginInfo };
};

export const setIsLoggedIn = isLoggedIn => {
  return { type: SET_IS_LOGGEDIN, payload: isLoggedIn };
};

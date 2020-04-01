import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import ReduxThunk from "redux-thunk";
import user from "../reducers/userReducer.js";
import results from "../reducers/bookingReducer";
import isLoggedIn from "../reducers/loginReducer";
import toast from "../reducers/appReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = state => next => action => {
  console.log("[Middleware dispatched]", action);
  const result = next(action);
  console.log("[Middleware next state]", state.getState());
  return result;
};

export const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(ReduxThunk, logger)
)(createStore);

export const rootReducer = combineReducers({
  user,
  results,
  isLoggedIn,
  toast
});

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(rootReducer, initialState);
}

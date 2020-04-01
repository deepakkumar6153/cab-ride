import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Book from "./components/Book/Book";

import "./App.css";
import { setToastInfo } from "./actions/appActions";

export default props => {
  const dispatch = useDispatch();
  const { toast } = useSelector(({ toast }) => ({
    toast
  }));
  const { show = false, type, message = "" } = toast;
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/book" component={Book} />
        </Switch>
      </BrowserRouter>
      {/* specific check for show variable, because of interim glitch observed
      if the variable is not used, clicking outside while the snackbar is active, 
      resulted in a green alert being shown for a few milliseconds*/}
      {show && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={show}
          autoHideDuration={3000}
          onClose={() => {
            dispatch(
              setToastInfo({
                show: false
              })
            );
          }}
        >
          <Alert severity={type}>{message}</Alert>
        </Snackbar>
      )}
    </>
  );
};

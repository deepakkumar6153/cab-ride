import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Book from "./components/Book/Book";

import "./App.css";
import { setShowToast } from "./actions/appActions";

export default props => {
  const dispatch = useDispatch();
  const { showToast } = useSelector(({ showToast }) => ({
    showToast
  }));
  console.log(showToast);
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

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showToast}
        autoHideDuration={3000}
        onClose={() => {
          dispatch(setShowToast(false));
        }}
      >
        <Alert severity="success">Cab confirmed!!</Alert>
      </Snackbar>
    </>
  );
};

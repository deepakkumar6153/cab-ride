import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import s from "./Login.module.scss";
import Header from "../Header/Header";
import { setIsLoggedIn } from "../../actions/loginActions";
import { setToastInfo } from "../../actions/appActions";

export default props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(({ isLoggedIn }) => ({
    isLoggedIn
  }));

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (isLoggedIn) {
    history.push("/book");
  }

  const handleRegister = () => {
    history.push("/register");
  };

  const handleLogin = () => {
    if (username && password) {
      dispatch(setIsLoggedIn(true));
      history.push("/book");
    } else {
      dispatch(
        setToastInfo({
          show: true,
          type: "error",
          message: "Please enter all details"
        })
      );
    }
  };

  return (
    <>
      <Header title="LOGIN TO APP" />
      <main className={s.main}>
        <div className={s.centerContent}>
          <div className={s.upper}>
            <TextField
              value={username}
              onChange={e => {
                setUsername(e.target.value);
              }}
              placeholder="10-digit mobile number or e-mail"
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Username"
              name="username"
              autoFocus
            />
            <TextField
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
              placeholder=" Enter password"
              type="password"
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
            />
            <Button
              className={s.submit}
              onClick={handleLogin}
              variant="contained"
              color="primary"
            >
              LOGIN
            </Button>
          </div>
          <div className={s.lower}>
            <div className={s.text}>Don't have an account?</div>
            <button className={s.link} onClick={handleRegister}>
              REGISTER NOW
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

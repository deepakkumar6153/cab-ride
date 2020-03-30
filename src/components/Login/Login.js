import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import s from "./Login.module.scss";
import Header from "../Header/Header";
import { setIsLoggedIn } from "../../actions/loginActions";

export default props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(({ isLoggedIn }) => ({
    isLoggedIn
  }));
  // if (isLoggedIn) {
  //   history.push("/book");
  // }

  const handleRegister = () => {
    history.push("/register");
  };

  const handleLogin = () => {
    dispatch(setIsLoggedIn(true));
    history.push("/book");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
              variant="outlined"
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
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
            />
            <Button onClick={handleLogin} variant="contained" color="primary">
              LOGIN
            </Button>
          </div>
          <div className={s.lower}>
            <div className={s.text}>Don't have an account?</div>
            <button className={s.submit} onClick={handleRegister}>
              REGISTER NOW
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

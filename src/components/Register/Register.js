import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import s from "./Register.module.scss";
import Header from "../Header/Header";
import { setIsLoggedIn } from "../../actions/loginActions";
import { setToastInfo } from "../../actions/appActions";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(({ isLoggedIn }) => ({
    isLoggedIn
  }));

  if (isLoggedIn) {
    history.push("/book");
  }

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleRegister = () => {
    if (
      username &&
      email &&
      mobile &&
      password &&
      confirmPassword &&
      carModel
    ) {
      if (password === confirmPassword) {
        dispatch(setIsLoggedIn(true));
        history.push("/book");
      } else {
        dispatch(
          setToastInfo({
            show: true,
            type: "error",
            message: "Passwords do not match"
          })
        );
      }
    } else {
      dispatch(
        setToastInfo({
          show: true,
          type: "error",
          message: "Please enter all details correctly"
        })
      );
    }
  };

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <>
      <Header title="REGISTER WITH APP" />
      <main className={s.main}>
        <div className={s.centerContent}>
          <div className={s.upper}>
            <TextField
              value={username}
              onChange={e => {
                setUsername(e.target.value);
              }}
              placeholder="Enter your full name"
              variant="standard"
              margin="dense"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="username"
              autoFocus
            />
            <TextField
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email"
              variant="standard"
              margin="dense"
              required
              fullWidth
              id="name"
              label="Email"
              name="email"
            />
            <TextField
              value={mobile}
              onChange={e => {
                setMobile(e.target.value);
              }}
              placeholder="Enter your mobile number"
              variant="standard"
              margin="dense"
              required
              fullWidth
              id="name"
              label="Mobile Number"
              name="mobile"
              type="number"
              maxLength="10"
            />
            <TextField
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
              placeholder=" Enter your password"
              type="password"
              variant="standard"
              margin="dense"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
            />
            <TextField
              value={confirmPassword}
              onChange={e => {
                setConfirmPassword(e.target.value);
              }}
              placeholder="Re-enter your password"
              type="password"
              variant="standard"
              margin="dense"
              required
              fullWidth
              id="confirmpassword"
              label="Re-enter Password"
              name="confirmPassword"
            />
            <TextField
              value={carModel}
              onChange={e => {
                setCarModel(e.target.value);
              }}
              placeholder="Enter your car model"
              variant="standard"
              margin="dense"
              required
              fullWidth
              id="name"
              label="Car Model"
              name="carModel"
              autoFocus
            />
            <Button
              className={s.submit}
              onClick={handleRegister}
              variant="contained"
              color="primary"
            >
              REGISTER
            </Button>
          </div>
          <div className={s.lower}>
            <div className={s.text}>Already have an account?</div>
            <button className={s.link} onClick={handleLogin}>
              LOGIN NOW
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

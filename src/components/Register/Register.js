import React, { Component } from "react";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import { border } from "@material-ui/system";
import s from "./Register.module.scss";
import Header from "../Header/Header";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      carModel: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRegister = () => {
    this.props.history.push("/book");
  };

  handleLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    const {
      username,
      email,
      mobile,
      password,
      confirmPassword,
      carModel
    } = this.state;
    return (
      <>
        <Header title="REGISTER WITH APP" />
        <main className={s.main}>
          <div className={s.centerContent}>
            <div className={s.upper}>
              <TextField
                value={username}
                onChange={this.handleInputChange}
                placeholder="Enter your full name"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="username"
                autoFocus
              />
              <TextField
                value={email}
                onChange={this.handleInputChange}
                placeholder="Enter your email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Email"
                name="email"
              />
              <TextField
                value={mobile}
                onChange={this.handleInputChange}
                placeholder="Enter your mobile number"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Mobile Number"
                name="mobile"
              />
              <TextField
                value={password}
                onChange={this.handleInputChange}
                placeholder=" Enter your password"
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
              />
              <TextField
                value={confirmPassword}
                onChange={this.handleInputChange}
                placeholder="Re-enter your password"
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="confirmpassword"
                label="Re-enter Password"
                name="confirmPassword"
              />
              <TextField
                value={carModel}
                onChange={this.handleInputChange}
                placeholder="Enter your car model"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Car Model"
                name="carModel"
                autoFocus
              />
              <Button
                onClick={this.handleRegister}
                variant="contained"
                color="primary"
              >
                REGISTER
              </Button>
            </div>
            <div className={s.lower}>
              <div className={s.text}>Already have an account?</div>
              <button className={s.submit} onClick={this.handleLogin}>
                LOGIN NOW
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }
}

import React from "react";
import PropTypes from "prop-types";

function Login(props) {
  return (
    <form>
      <label>Username</label>
      <input type="text"></input>
      <label>Password</label>
      <input type="password"></input>
    </form>
  );
}

Login.propTypes = {};

export default Login;

import React from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  return (
    <div>
      <label>Email</label><input type="email" /> <br />
      <label>Phone</label><input type="phone" /> <br />
      <label>Username</label><input type="text" /> <br />
      <label>Password</label><input type="password" />
    </div>
  );
};

Login.propTypes = {
  logoSrc: "",
  email: false,
  username: true,
  phoneNumber: false,
};

export default Login;

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const AuthFormLogin = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  return (
    <section className="auth">
      <div className="auth-holder">
        <h1>Login To Your Account</h1>
        <form onSubmit={handleSubmit} name={name}>
          <div>
            <label htmlFor="username">
              <h2>Username</h2>
            </label>
            <input name="username" type="text" required />
          </div>
          <div>
            <label htmlFor="password">
              <h2>Passsword</h2>
            </label>
            <input name="password" type="password" required />
          </div>
          <div>
            <button type="submit">{displayName}</button>
          </div>
          <div>
            <Link to="/signup">
              <p>Don't Have An Account? Click Here To Sign Up</p>
            </Link>
          </div>
          {error && error.response && (
            <div id="auth-error"> {error.response.data} </div>
          )}
        </form>
      </div>
    </section>
  );
};

const AuthFormSignUp = (props) => {
  const { name, displayName, handleSubmit,error } = props;

  return (
    <section className="auth">
      <div className="auth-holder">
        <h1>
          Make A Weather<span className="light-green">App</span> Account
        </h1>
        <form onSubmit={handleSubmit} name={name}>
          <div>
            <label htmlFor="username">
              <h2>Username</h2>
            </label>
            <input name="username" type="text" required />
          </div>
          <div>
            <label htmlFor="password">
              <h2>Password</h2>
            </label>
            <input name="password" type="password" required />
          </div>
          <div>
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
    </section>
  );
};

const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthFormLogin);
export const Signup = connect(mapSignup, mapDispatch)(AuthFormSignUp);

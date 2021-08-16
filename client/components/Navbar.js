import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import SearchBox from "./search/SearchBox";

import { Back, List } from "react-bootstrap-icons";

import Background from "./Background.js";

const Navbar = ({ handleClick, isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? (
        <section className="nav-bar">
          <div className="nav-left">
            <Link to="/">
              <span className="nav-logo" style={{ visibility: "visible" }}>
                Little<span className="purple">Weather</span>
                <span className="light-green">App</span>
              </span>
            </Link>
            <Link to="/home" className="nav-link hidden-when-small">
              My Home
            </Link>
            {/* <a href="# " className="nav-link hidden-when-small">
            10-Day
          </a> */}
          </div>

          <div className="nav-right hidden-when-small">
            <SearchBox />
            <Link to="/account" className="nav-link ">
              Account
            </Link>
            <button onClick={handleClick}>Logout</button>
          </div>
          <List size={60} className="hamburger" />
        </section>
      ) : (
        <section className="nav-bar">
          <div className="nav-left">
            <Link to="/">
              <span className="nav-logo" style={{ visibility: "visible" }}>
                Little<span className="purple">Weather</span>
                <span className="light-green">App</span>
              </span>
            </Link>
          </div>

          <div className="nav-right hidden-when-small">
            <SearchBox />
            <Link to="/login" className="nav-link ">
              Login
            </Link>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          </div>
          <List size={60} className="hamburger" />
        </section>
      )}
      <Background />
    </>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    username: state.auth.id,
    favorites: state.favoritesReducer.favorites,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);

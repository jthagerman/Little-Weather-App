import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import SearchBox from "./search/SearchBox";
import bg1 from "../../public/images/forest-931706.jpg";
import bg2 from "../../public/images/forest-3394066.jpg";
//import bg3 from '../../public/images/forest-3622519.jpg'
import bg4 from "../../public/images/hills-615429_1920.jpg";
// import bg5 from '../../public/images/lightning-2287319_1920.jpg'
import bg6 from "../../public/images/sky-690293_1920.jpg";
import bg7 from "../../public/images/sky-690293.jpg";
import bg8 from "../../public/images/tree-736875.jpg";
import bg9 from "../../public/images/1field.jpg";
import bg10 from "../../public/images/1winter.jpg";
import bg11 from "../../public/images/1milk.jpg";
// import bg12 from '../../public/images/1thunder.jpg'
// import bg9 from '../../public/images/tree-736885.jpg'
import { Back, List } from "react-bootstrap-icons";

import Background from "./Background.js"

let bg = [bg1, bg2, bg4, bg6, bg7, bg8, bg9, bg10, bg11];

const getRandomBGPath = () => {
  return bg[Math.floor(Math.random() * bg.length)];
};

const Navbar = (({ handleClick, isLoggedIn, }) => {


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
            <button onClick={handleClick}>
              Logout
            </button>
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
      <Background/>
    </>
  );
});

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    username: state.auth.id,
    favorites: state.favoritesReducer.favorites
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

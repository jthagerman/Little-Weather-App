import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import SearchBox from "./search/SearchBox";
import bg1 from '../../public/images/forest-931706.jpg'
import bg2 from '../../public/images/forest-3394066.jpg'
//import bg3 from '../../public/images/forest-3622519.jpg'
import bg4 from '../../public/images/hills-615429_1920.jpg'
import bg5 from '../../public/images/lightning-2287319_1920.jpg'
import bg6 from '../../public/images/sky-690293_1920.jpg'
import bg7 from '../../public/images/sky-690293.jpg'
import bg8 from '../../public/images/tree-736875.jpg'
import bg9 from '../../public/images/tree-736885.jpg'

let bg = [bg1,bg2,bg4,bg5,bg6,bg7,bg8,bg9]


const getRandomBGPath = () => {
  return bg[Math.floor(Math.random() * bg.length)]
}


const Navbar = ({ handleClick, isLoggedIn }) => (
  <>
    {isLoggedIn ? (
      <section className="nav-bar">
        {/* The navbar will show these links after you log in */}
        <SearchBox />
        <Link to="/home">Home</Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
      </section>
    ) : (
      <section className="nav-bar">
        <div className="nav-left">
          WeatherThing
          <Link to="/Home" className="nav-link">Login</Link>
          <a href="#"className="nav-link">Hourly</a>
          <a href="# "className="nav-link">10-Day</a>
        </div>

        <div className="nav-right">
        <SearchBox />
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup"><button>Sign Up</button></Link>
        </div>
      </section>
    )}
    <section>
    <img src={getRandomBGPath()} className="banner" />

    </section>
  </>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
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

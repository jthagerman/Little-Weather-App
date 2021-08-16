import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";
import Search from "./components/search/Search";
import Weather from "./components/weather/Weather.js";
import Homepage from "./Homepage";
import About from "./components/About";


class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <section>
        {isLoggedIn ? (
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/home" component={Home} />
            <Route path="/search/:query" component={Search} />
            <Route exact path="/weather" component={Weather} />
            <Route path="/about" component={About} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/search/:query" component={Search} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/weather" component={Weather} />
            <Route path="/about" component={About} />
            <Route component={Homepage} />
          </Switch>
        )}
      </section>
    );
  }
}


const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Routes));

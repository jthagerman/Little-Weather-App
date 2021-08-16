import { render } from "enzyme";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(previousProps) {
    console.log("updating");
  }

  render() {
    let favs = this.props.favorites || [];
    if(favs.length > 10) favs = favs.slice(0,10)

    return (
      <section className="personal-home">
        <div>
          <h1>
            Welcome Back, {this.props.username[0].toUpperCase()}
            {this.props.username.slice(1)}
          </h1>
          <p className="tagline">It's a Beautiful Day!</p>
        </div>
        <div className="favorites-holder">
          {favs.length >= 1 ? (
            <div id="favorites-flex">
              {favs.map((element, index) => {
                return (
                  <div className="favorite-tile" key={index}>
                    <Link
                      to={{ pathname: "/weather", state: { data: element } }}

                    >

                <h1>{element.temp}&#176;</h1>
                        <p>{element.city}</p> <p>{element.state_name}</p>

                    </Link>
                  </div>
                );
              })}{" "}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    favorites: state.favoritesReducer.favorites,
  };
};

export default connect(mapState)(Home);

import React from "react";
import SearchBox from "./components/search/SearchBox";
import { connect } from "react-redux";
import { fetchRandomThunk, setLocation } from "./store/location";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.random = this.random.bind(this);
  }

  random() {
    (this.props.randomLocation());
  }

  componentDidUpdate(previousProps) {
    if (previousProps.location !== this.props.location) {
      const location = this.props.location;
      this.props.setLocation(location);
      this.props.history.push("/weather", { data: location });
    }
  }

  render() {
    return (
      <section className="home-page">
        <SearchBox size="large"></SearchBox>
        <button onClick={() => this.random()}>Random</button>
        <p>Keep your face to the sun and you will never see the shadows</p>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.locationReducer.location,
  };
};
const mapDispatch = (dispatch) => {
  return {
    randomLocation: () => dispatch(fetchRandomThunk()),
    setLocation: (query) => dispatch(setLocation(query)),
  };
};

export default connect(mapStateToProps, mapDispatch)(Homepage);

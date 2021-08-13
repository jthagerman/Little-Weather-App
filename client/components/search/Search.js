import React from "react";
import { connect } from "react-redux";
import { searchLocationThunk } from "../../store/location";
import { Link } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let location = this.props.match.params.query;
    this.props.searchLocations(location);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.query !== this.props.match.params.query) {
      let location = this.props.match.params.query;
      this.props.searchLocations(location);
    }
    if (previousProps.searchResults !== this.props.searchResults) {
      if (!Array.isArray(this.props.searchResults)) {
        const query = this.props.searchResults;
        console.log(query, "im checking the query");
        if (query !== null)
          this.props.history.push("/weather", { data: query });
      }
    }
  }

  render() {
    if (Array.isArray(this.props.searchResults)) {
      let locations = this.props.searchResults || [];
      return (
        <section>
          {locations.length === 0 ? (
            <span>No Results</span>
          ) : (
            <span>
              {locations.map((element, index) => {
                return (
                  <Link to={{pathname: "/weather",state: {data: element}}} key={index}>
                    <div>
                      {element.zip},{element.city},{element.state_name}
                    </div>
                  </Link>
                );
              })}
            </span>
          )}
        </section>
      );
    } else {
      return <span>No Results Found </span>;
    }
  }
}

const mapState = (state) => {
  return {
    searchResults: state.locationReducer.searchResults,
  };
};

const mapDispatch = (dispatch) => {
  return {
    searchLocations: (query) => dispatch(searchLocationThunk(query)),
  };
};

export default connect(mapState, mapDispatch)(Search);

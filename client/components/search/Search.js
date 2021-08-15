import React from "react";
import { connect } from "react-redux";
import { searchLocationThunk } from "../../store/location";
import { Link } from "react-router-dom";
import { setLocation } from "../../store/location";
import {Search as Mag} from "react-bootstrap-icons";


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
          this.props.setLocation(query)
          this.props.history.push("/weather", { data: query });
      }
    }
  }

  render() {
    if (Array.isArray(this.props.searchResults)) {
      let locations = this.props.searchResults || [];
      return (
        <section className="search">
             <h1 id="search-title">Search Results</h1>
          {locations.length === 0 ? (
            <span><Mag size={100}/><p>No Results Found</p></span>
          ) : (
            <section className="search-result-holder">

              {locations.map((element, index) => {
                return (
                  <Link to={{pathname: "/weather",state: {data: element}}} key={index}>
                    <div className="search-result">
                      <h1>{element.city}</h1><p>{element.state_name}, {element.zip}</p>
                    </div>
                  </Link>
                );
              })}
            </section>
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
    setLocation: (query) => dispatch(setLocation(query))
  };
};

export default connect(mapState, mapDispatch)(Search);

import React from "react";
import { useHistory } from "react-router-dom";
import MagGlass from "../icons/MagGlass";

const SearchBox = (props) => {
  let history = useHistory();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let searchKey = event.target.value;
      history.push(`/search/${searchKey}`);
    }
  };

  if (props.size === "large") {
    return (
      <span>
        <input
          className="search-input-large"
          type="text"
          onKeyDown={handleKeyDown}
          placeholder={`Search zip code or city`}
        />
      </span>
    );
  } else {
    return (
      <span>
        <input
          className="search-input hidden-when-small"
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Search zip code or city"
        />
      </span>
    );
  }
};

export default SearchBox;

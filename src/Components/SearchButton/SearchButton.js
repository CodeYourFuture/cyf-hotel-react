import React from "react";

const SearchButton = props => {
  return (
    <button onClick={props.searchFunction} className="btn btn-primary">
      Search
    </button>
  );
};

export default SearchButton;

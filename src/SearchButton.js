import React from "react";

const SearchButton = props => {
  return (
    <div>
      <div className="search">
        <button className="btn btn-primary">Search{props.SearchButton}</button>
      </div>
    </div>
  );
};

export default SearchButton;

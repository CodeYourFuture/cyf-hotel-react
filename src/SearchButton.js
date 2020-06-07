import React from "react";

const SearchButton = props => {
  return (
    <div style={{ display: "flex" }}>
      <button className="btn btn-primary">Search</button>
      <button
        className="btn btn-primary"
        style={{ marginLeft: "5px" }}
        onClick={props.return}
      >
        Return
      </button>
    </div>
  );
};

export default SearchButton;

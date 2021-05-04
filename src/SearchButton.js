import React from "react";
const SearchButton = prop => {
  function ready() {
    prop.ready();
  }
  return (
    <button className="btn btn-primary" onClick={ready}>
      Search
    </button>
  );
};
export default SearchButton;

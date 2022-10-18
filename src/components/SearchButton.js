import React from "react";

const SearchButton = ({ handleSubmit }) => {
  return (
    <button className="btn search-button" onClick={handleSubmit}>
      Search
    </button>
  );
};

export default SearchButton;

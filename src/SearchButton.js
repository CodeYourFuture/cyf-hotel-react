import React from "react";

const SearchButton = ({ handleSubmit }) => {
  return (
    <button className="btn btn-primary" onClick={handleSubmit}>
      Search
    </button>
  );
};

export default SearchButton;

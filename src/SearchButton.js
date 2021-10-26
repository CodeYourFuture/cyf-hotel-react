import React from "react";

const SearchButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary">
      Search
    </button>
  );
};

export default SearchButton;

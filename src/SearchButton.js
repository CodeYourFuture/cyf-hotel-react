import React from "react";

const SearchButton = ({ onSubmitHandler }) => {
  return (
    <button className="btn btn-primary" onClick={onSubmitHandler}>
      Search
    </button>
  );
};

export default SearchButton;

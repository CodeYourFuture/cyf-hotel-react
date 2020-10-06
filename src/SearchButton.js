import React from "react";

const SearchButton = ({ name }) => {
  return (
    <div>
      <button className="btn btn-danger">{name}</button>
    </div>
  );
};

export default SearchButton;

import React from "react";

const SearchContainer = props => {
  return (
    <div className="search-container">
      <div className="search-id">
        <input
          placeholder="Enter room id"
          type="text"
          onChange={props.idChange}
        />
      </div>
      <div className="search-name">
        <input
          placeholder="Enter name"
          type="text"
          onChange={props.inputChange}
        />
      </div>
    </div>
  );
};

export default SearchContainer;

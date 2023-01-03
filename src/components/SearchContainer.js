import React from "react";

const SearchContainer = () => {
  return (
    <div className="search-container">
      <div className="search-id">
        <input placeholder="Enter room id" type="text" />
        <button className="id"> Search IDs</button>
      </div>
      <div className="search-name">
        <input placeholder="Enter name" type="text" />
        <button className="id"> Search Names</button>
      </div>
    </div>
  );
};

export default SearchContainer;

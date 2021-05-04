import React from "react";

const SearchButton = (props) => {
  
  return (
    <div className="search-row">
      <input
      onChange={props.handleSearchInput}
      value={props.searchInput}
        type="text"
        id="customerName"
        className="form-control"
        placeholder="Customer name"
      />
      <button className="btn btn-primary">Search</button>
    </div>
  );
};

export default SearchButton;

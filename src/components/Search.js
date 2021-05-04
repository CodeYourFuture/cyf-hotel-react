import React, { useState } from "react";
import "./Search.css";
import SearchButton from "./SearchButton.js";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = event => {
    setSearchInput(event.target.value);
    // console.log(searchInput);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    props.search(searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSearchSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                value={searchInput}
                onChange={handleSearchInput}
                className="form-control"
                placeholder="Customer name"
              />
            </div>
            <div className="search-row">
              <SearchButton />
            </div>
            <div />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

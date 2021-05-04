import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ searchResults }) => {
  const [searchInput, setSearchInput] = useState(" ");

  function handleSearchInput(event) {
    console.log("input log " + event.target.value);
    setSearchInput(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log("on submit " + searchInput);
    searchResults(searchInput);
  }

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleOnSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                value={searchInput}
                className="form-control"
                placeholder="Customer name"
                onChange={handleSearchInput}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

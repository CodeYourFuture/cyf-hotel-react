import React, { useState } from "react";
import SearchButton from "./SearchButton.js";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };
  const handleOnSubmit = event => {
    props.search(searchInput);
    event.preventDefault();
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="Caption">Search Bookings</h4>
      </div>
      <div className="row">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleOnSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                onChange={handleSearchInput}
                value={searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
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

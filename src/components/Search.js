import React, { useState } from "react";
import SearchButton from "../SearchButton";

const Search = prop => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    prop.search(searchInput);
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                value={searchInput}
                onChange={event => handleSearchInput(event)}
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

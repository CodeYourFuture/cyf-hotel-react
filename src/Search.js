import React, { useState } from "react";
import SearchButton from "./SearchButton";
import "./Search.css";

// Renders bookings search box, called by `Bookings.js`.
const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = event => setSearchInput(event.target.value);

  return (
    <div className="Search-content">
      <div className="page-header">
        <h2 className="text-center">Search Bookings</h2>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
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

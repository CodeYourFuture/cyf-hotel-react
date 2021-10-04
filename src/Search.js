import React from "react";
import SearchButton from "./SearchButton";

// Renders bookings search box, called by `Bookings.js`.
const Search = () => {
  return (
    <div className="App-search">
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

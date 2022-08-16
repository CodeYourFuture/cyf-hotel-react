import React from "react";
import SearchButton from "./SearchButton";

const Search = () => {
  return (
    <div className="search-container">
      <h3 className="search-title">Search Bookings</h3>
      <form className="search-form">
        <label className="search-form-label" htmlFor="customerName">
          Customer name
        </label>
        <div>
          <input
            type="text"
            id="customerName"
            className="search-form-input"
            placeholder="Customer name"
          />
          <SearchButton />
        </div>
      </form>
    </div>
  );
};

export default Search;

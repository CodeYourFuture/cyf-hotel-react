/* I had help with task L3 T18 */

import React, { useState } from "react";
import SearchButton from "./SearchButton";
import "./Search.css";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.search(searchInput);
  }

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-center">Search Bookings</h4>
      </div>
      <div className="row">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName" hidden>
              Customer name
            </label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
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

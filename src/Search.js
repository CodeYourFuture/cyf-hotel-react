import React, { useState } from "react";
import SearchButton from "./SearchButton.js";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }
  function searchTrigger(event) {
    event.preventDefault();
    props.search(searchInput);
    console.log("the form had been submitted");
  }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            className="form-group search-box"
            onSubmit={event => searchTrigger(event)}
          >
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                value={searchInput}
                id="customerName"
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

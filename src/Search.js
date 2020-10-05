import React, { useState } from "react";
import Bookings from "./Bookings.js";
import SearchButton from "./SearchButton.js";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };
  const submitForm = event => {
    event.preventDefault();
    props.search(searchInput);
    console.log("form submitted");
  };
  console.log(searchInput);
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            className="form-group search-box"
            onSubmit={event => submitForm(event)}
          >
            <label htmlFor="customerName">Customer name</label>
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

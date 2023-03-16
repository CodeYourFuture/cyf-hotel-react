import React from "react";
import SearchButton from "./SearchButton";
import { useState } from "react";

const Search = ({ findingCustomersInfo }) => {
  let [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event) {
    // console.log(event.target.value);
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    console.log(searchInput);
    event.preventDefault();
    findingCustomersInfo(searchInput);
  }

  return (
    // <div className="search">
    <div>
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={handleSubmit} className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                onChange={handleSearchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
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

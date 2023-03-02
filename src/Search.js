import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event) {
    // console.log(event.target.value);
    setSearchInput(event.target.value);
    // console.log(searchInput);
  }

  function handleSubmit(event) {
    // console.log(searchInput);
    event.preventDefault();
    search(searchInput);
  }

  // console.log(handleSearchInput);
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

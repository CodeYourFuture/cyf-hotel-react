import React, { useState } from "react";
import SearchButton from "./SearchButton.js";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");
  function handleOnChange(event) {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  }
  function handleSubmit(event) {
    search(searchInput);
    event.preventDefault();
  }
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
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                onChange={handleOnChange}
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

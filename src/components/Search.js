import React, { useState } from "react";
import SearchButton from "../SearchButton";

const Search = prop => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = event => {
    setSearchInput(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(searchInput);
    prop.search(searchInput);
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            onClick={event => handleSubmit(event)}
            className="form-group search-box"
          >
            {/* <label htmlFor="customerName">Customer name</label> */}
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

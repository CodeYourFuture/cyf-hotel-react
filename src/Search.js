import React, { useState, useEffect } from "react";
import SearchButton from "./SearchButton";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
    setSearchInput(event.target.value);
    console.log(event.target.value);
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
            onSubmit={(e) => {
              e.preventDefault();
              props.search(searchInput);
            }}
          >
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
              {/* <button className="btn btn-primary">Search123</button> */}
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

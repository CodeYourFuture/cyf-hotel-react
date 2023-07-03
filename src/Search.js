import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              props.search(searchInput);
            }}
            className="form-group search-box"
          >
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                value={searchInput}
                onChange={handleSearchInput}
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

import React from "react";
import SearchButton from "./SearchButton";
import { useState } from "react";
const Search = props => {
  const [searchInput] = useState();

  const setSearchInput = e => {
    setSearchInput(e.target.value);
  };
  console.log(searchInput);

  const makeSearch = event => {
    event.preventDefault();
    props.search(searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={makeSearch}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                onChange={setSearchInput}
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

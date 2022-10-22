import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");

  const handelSearchInput = event => {
    setSearchInput(event.target.value);
  };

  const handelOnSubmit = event => {
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
          <form className="form-group search-box" onSubmit={handelOnSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                onChange={handelSearchInput}
                type="text"
                value={searchInput}
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

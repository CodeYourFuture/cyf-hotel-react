import React, { useState } from "react";
import SearchButton from "../data/SearchButton";
export const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = event => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  };
  const handleSubmit = event => {
    props.search(searchInput);
    event.preventDefault();
  };

  return (
    <div className="search">
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
                value={searchInput}
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

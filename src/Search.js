import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = event => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.search(searchInput);
    setSearchInput("");
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left font-weight-bold text-success">
          Search Bookings
        </h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            className="form-group search-box"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="form-div">
              <label htmlFor="customerId">Customer id</label>
              <div className="search-row">
                <input
                  type="text"
                  id="customerId"
                  className="form-control"
                  placeholder="Customer id"
                />
                <button className="btn btn-info">Search IDs</button>
              </div>
            </div>
            <div className="form-div">
              <label htmlFor="customerName">Customer name</label>
              <div className="search-row">
                <input
                  type="text"
                  id="customerName"
                  className="form-control"
                  value={searchInput}
                  placeholder="Customer name"
                  onChange={handleSearchInput}
                />
                <SearchButton />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

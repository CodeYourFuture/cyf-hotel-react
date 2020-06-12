import React, { useState } from "react";

const Search = ({ search, initialBookings, setBookings }) => {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <hr />
      <div className="row ">
        <div className="col">
          <form
            className="form-group search-box"
            onSubmit={e => {
              e.preventDefault();
              search(searchInput);
            }}
          >
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </form>
          <button
            className="btn btn-primary clear-search"
            onClick={() => {
              setBookings(initialBookings);
              setSearchInput("");
            }}
          >
            Clear search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;

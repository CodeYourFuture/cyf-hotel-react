import React, { useState } from "react";
import SearchButton from "./SearchButton";
import Bookings from "./Bookings";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleSearchInput = event => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
    event.preventDefault();
  };
  const handleSearch = event => {
    event.preventDefault();
    search(searchInput);
    setSearchInput("");
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSearch}>
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
            </div>
            <SearchButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

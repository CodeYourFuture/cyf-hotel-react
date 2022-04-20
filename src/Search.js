import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = e => {
    setSearchInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
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
          <form className="form-group search-box">
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
              <SearchButton handleSubmit={onSubmit} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

import React, { useState } from "react";
import SearchButton from "./SearchButton.js";

const Search = ({ search, FakeBookings }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = event => {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    search(searchInput);
    console.log(searchInput);
  };
  return (
    <div className="search">
      {/* {<Heading />} */}
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
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
              <SearchButton btnName="Search" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

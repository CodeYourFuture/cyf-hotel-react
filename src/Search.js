import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ bookings, search }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = ({ target }) => {
    setSearchInput(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const convertedVal = searchInput.toLowerCase().trim();
    const matched = bookings.filter(({ firstName, surname }) => {
      return (
        firstName.toLowerCase().includes(convertedVal) ||
        surname.toLowerCase().includes(convertedVal)
      );
    });
    search(matched);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
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
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

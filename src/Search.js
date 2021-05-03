import React, { useState } from "react";
import SearchButton from "./SearchButton";
const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");
  function handleInputChange(event) {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(searchInput);
    // setSearchInput(event.target.value);
    console.log(searchInput);
    setSearchInput("");
  }
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
                value={searchInput}
                className="form-control"
                placeholder="Customer name"
                onChange={handleInputChange}
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

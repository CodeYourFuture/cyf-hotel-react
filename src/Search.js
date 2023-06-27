import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(e) {
    let searchValue = e.target.value.toLowerCase().trim();
    setSearchInput(searchValue);

    console.log(searchValue);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    props.search(searchInput);
    console.log("Search for:", searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSearchSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                onChange={handleSearchInput}
                value={searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                label="Search"
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

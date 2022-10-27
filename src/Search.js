import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = event => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  };

  const handleOnSubmit = event => {
    props.search(searchInput);
    event.preventDefault();
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="search-title">Search Hotel Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleOnSubmit}>
            {/* <label htmlFor="customerName">Customer name</label> */}
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                onChange={handleSearchInput}
                value={searchInput}
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

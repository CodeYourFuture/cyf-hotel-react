import React from "react";
import SearchButton from "./SearchButton";
import { useState } from "react";

const Search = props => {
  const [searchInputName, setSearchInputName] = useState("");
  function handleSubmitName(event) {
    event.preventDefault();
    props.search(searchInputName);
  }

  function handleSearchInputName(event) {
    setSearchInputName(event.target.value);
    // console.log(event.target.value)
  }

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmitName}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                value={searchInputName}
                onChange={handleSearchInputName}
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

export default Search;

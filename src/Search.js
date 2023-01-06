import React, { useState } from "react";
import SearchButton from "./SearchButton";
// import Bookings from "./Bookings";

const Search = props => {
  let [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event) {
    let values = event.target.value;
    setSearchInput(values);
  }

  function onSubmit(event) {
    event.preventDefault();
    props.search(searchInput);
  }

  return (
    <div className="search">
      <div className="page-header">
        <br />

        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={onSubmit}>
            <br />
            <label htmlFor="customerName">Customer name</label>

            <div className="search-row">
              <input
                type="text"
                id="customerName"
                value={searchInput}
                className="form-control"
                placeholder="Customer name"
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

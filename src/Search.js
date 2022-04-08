import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  // use State
  let [searchInput, setSearchInput] = useState("");
  // handle search for input bar function
  const handleSearchInput = event => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };
  // handle form submission function
  const handleSubmit = event => {
    event.preventDefault();
    props.search(searchInput);
    console.log("sending data..");
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

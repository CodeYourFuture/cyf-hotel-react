import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  // console.log(props.search);
  const [searchInput, setSearchInput] = useState("");
  //const [onSubmit,setOnSubmit] = useState()

  const handleSearchSubmit = event => {
    event.preventDefault();
    props.search(searchInput);
  };
  const handleSearchInput = event => {
    setSearchInput(event.target.value);
    console.log(searchInput);
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
                type="text"
                id="customerName"
                className="form-control"
                value={searchInput}
                onChange={handleSearchInput}
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

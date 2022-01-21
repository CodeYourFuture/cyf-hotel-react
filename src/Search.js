import React, { useState } from "react";
import SearchButton from "./SearchButton";
const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  const handleSubmit = event => {
    event.preventDefault();
    search(searchInput);
  };
  const handleSearchInput = event => {
    setSearchInput(event.target.value);
    console.log(searchInput);
    if (event.target.value.length === 0) {
      search("");
    }
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
                value={searchInput}
                type="text"
                id="customerName"
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

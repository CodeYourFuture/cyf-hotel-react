import React, { useState } from "react";
import SearchButton from "./SearchButton";
import "../../css/search.css";
import SearchInput from "./SearchInput";
const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.search(searchInput);
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={handleSubmit} className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <SearchInput value={searchInput} onChange={handleSearchInput} />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

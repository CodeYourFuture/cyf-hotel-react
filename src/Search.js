import React, { useState } from "react";
import SearchButton from "./SearchButton";
const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");
  console.log("searchInput", searchInput);

  const handleSearchInput = e => {
    setSearchInput(e.target.value);
  };
  const handlerSubmit = e => {
    e.preventDefault();
    search(searchInput);
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handlerSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                onChange={handleSearchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
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

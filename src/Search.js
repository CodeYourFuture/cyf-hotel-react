import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.search(searchInput);
  };
  const resetHandler = () => {
    setSearchInput('');
    props.resetSearch();
  };




  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={submitHandler}>
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
              <SearchButton className="btn btn-primary" type="submit">
                Search
              </SearchButton>
              {searchInput && <SearchButton className="btn btn-secondary ms-2" type="reset" onClick={resetHandler}>
                Reset
              </SearchButton> }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

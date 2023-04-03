import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
    setSearchInput(event.target.value); //update the state variable `searchInput` with what the user typed in the input field
    console.log(event.target.value); //using of the `event.target.value` to get the input value
  }

  const handleSearch = (event) => {
    event.preventDefault(); //`event.preventDefault()` to prevent the browser to implicitely submit the form
    search(searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSearch}>
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

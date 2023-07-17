import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = (props) => {
  
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
    const updatedKeyword = event.target.value;
    console.log(updatedKeyword);
    setSearchInput(updatedKeyword);
  }

  // get value from search input and pass it to the function called search that we get from the props
  function handleSubmit(event) {
    event.preventDefault();
    props.search(searchInput);
  }

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
                value={searchInput}
                onChange={(event) => handleSearchInput(event)}
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

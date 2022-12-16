import React, { useState } from "react";

// import SearchButton from "./myComponents/SearchButton";
import SearchButton from "./SearchButton";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    // console.log(searchInput);
    search(searchInput);
  }
  // console.log(searchInput);
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
                value={searchInput}
                onChange={handleSearchInput}
                placeholder="Customer name"
              />
              {/* <button className="btn btn-primary">Search</button> */}
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

import React, { useState } from "react";
import SearchBtn from "./SearchBtn"


const Search = (props) => {
  const [searchInput, setSearchInput] = useState("")
  // console.log(searchInput)

  function handleSearchInput(event) {
    setSearchInput(event.target.value)

  }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <label className="searchIdLabel" htmlFor="customerName">Customer id</label>
          </form>
          <div className="search-row">
            <input
              onChange={handleSearchInput}
              type="text"
              id="customerName"
              className="form-control"
              placeholder="Customer name"
              value={searchInput}
            />
            <button onClick={() => props.search(searchInput)} className="btn btn-primary">Search</button>
            {/* <input
              type="text"
              id="customerId"
              className="form-control"
              placeholder="Customer id"
            /> */}
          </div>
          {/* <SearchBtn /> */}
        </div>
      </div>
    </div>
  );
};

export default Search;

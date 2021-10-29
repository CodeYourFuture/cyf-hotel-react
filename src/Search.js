import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = e => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = e => {
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
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <div className="d-flex flex-row ">
              <label htmlFor="customerID" style={{ width: "50%" }}>
                Customer ID
              </label>
              <label htmlFor="customerName">Customer name</label>
            </div>
            <div className="search-row d-flex flex-row justify-content-between ">
              <input
                type="text"
                id="customerID"
                className="form-control "
                placeholder="Customer ID"
                onChange={handleSubmit}
              />
              <SearchButton search="Search IDs" />

              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                onChange={handleSearchInput}
              />
              <SearchButton search="Search Name" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

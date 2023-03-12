import React, { useState } from "react";
import Btn from "./SearchButton";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (event) => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };

  const submitHandler = (event) => {
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
          <form className="form-group search-box" onSubmit={submitHandler}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                value={searchInput}
                onChange={handleSearchInput}
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <Btn />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

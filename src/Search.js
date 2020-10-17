import React, { useState } from "react";
import Bookings from "./Bookings";
import SearchButton from "./SearchButton";
import "./index.css";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = event => {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  };
  const submitHandler = event => {
    event.preventDefault();
    props.search(searchInput);
  };

  return (
    <div className="search">
      <h4 className="searchBooking">Search Bookings</h4>

      <form onSubmit={submitHandler}>
        <label>Customer name</label>
        <div className="searchInputBtn">
          <input
            type="text"
            id="customerName"
            placeholder="Customer name"
            value={searchInput}
            onChange={handleSearchInput}
          />
          <SearchButton />
        </div>
      </form>
    </div>
  );
};

export default Search;

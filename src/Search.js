import React, { useState } from "react";
import SearchButton from "./components/SearchButton";
import "./index.css";

const Search = props => {
  const [search, setSearch] = useState("");
  const handleSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSearch(search);
  };

  return (
    <div className="search-container">
      <h4 className="searchBooking">Search Bookings</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Guest Name:</label>
        <input
          type="text"
          id="guestName"
          placeholder="Enter Guest Name"
          value={search}
          onChange={handleSearch}
        />
        <SearchButton />
      </form>
    </div>
  );
};

export default Search;

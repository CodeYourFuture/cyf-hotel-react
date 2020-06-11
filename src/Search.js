import React, { useState } from "react";

const Search = ({ search, bookings, setBookings, original }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = event => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  };
  if (searchInput === "") {
    setBookings(bookings);
  }
  const showAll = () => {
    console.log("pres button ");
    console.log(bookings);
    setBookings(original);
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            className="form-group search-box"
            onSubmit={event => {
              event.preventDefault();
              search(searchInput);
            }}
          >
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Search By First Name"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </form>
          <button className="btn btn-primary show-all" onClick={showAll}>
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;

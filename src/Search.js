import React from "react";
import { useState } from "react";
import Bookings from "./Bookings";

const Search = ({ setFirstName }) => {
  const [searchInput, setsearchInput] = useState("");
  function handleSearchInput(event) {
    setsearchInput(event.target.value);
    console.log(event.target.value);
  }
  function handleSubmitForm(event) {
    event.preventDefault();
    console.log("this is submit >>", event.target.customerName.value);
    <Bookings searchVal={event} />;
  }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmitForm}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                value={searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                onChange={handleSearchInput}
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

import React from "react";
import SearchButton1 from "./SearchButton1.js";
import SearchButton2 from "./SearchButton2.js";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerID">Customer ID</label>
            <div className="search-row">
              <input
                type="text/number"
                id="customerID"
                className="form-control"
                placeholder="Customer ID"
              />
              <SearchButton1 />
            </div>
          </form>
        </div>
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Customer Name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer Name"
              />
              <SearchButton2 />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

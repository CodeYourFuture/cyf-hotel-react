import React from "react";
import SearchButton from "./SearchButton";
const Search = () => {
  return (
    <div>
      <div>
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form className="form-group search-box">
              <label htmlFor="customerName">Customer id</label>
              <div className="search-row">
                <input
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer id"
                />
                <button className="btn btn-primary">Search id</button>
              </div>
            </form>
            <form className="form-group search-box">
              <label htmlFor="customerName">Customer name</label>
              <div className="search-row">
                <input
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer name"
                />
                <SearchButton className="search" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

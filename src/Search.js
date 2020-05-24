import React from "react";
import SearchBtn from "./SearchBtn"


const Search = () => {
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

          <form className="form-group search-box">
            <SearchBtn />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

import React from "react";

const Search = () => {
  return (
    <div className="search">
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
                id="customerId"
                className="form-control"
                placeholder="Customer id"
              />
              <button className="btn btn-primary">Search IDs</button>
            </div>
          </form>
        </div>
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <button className="btn btn-primary">Search Names</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <div className="form-group search-box">
            <label htmlFor="customerId">Customer Id</label>
            <div className="search-row">
              <input
                type="text"
                id="customerId"
                className="form-control"
                placeholder="Customer Id"
              />
              <button className="btn btn-primary fn-submit-name">
                Search IDs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

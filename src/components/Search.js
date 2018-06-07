import React from "react";
import Button from "./Button";
const Search = props => (
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
            <Button buttonName="Search ID" />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="form-group search-box">
          <label htmlFor="customerId">Customer Name</label>
          <div className="search-row">
            <input
              type="text"
              id="customerId"
              className="form-control"
              placeholder="Customer Name"
            />
            <Button buttonName="Search Name" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Search;

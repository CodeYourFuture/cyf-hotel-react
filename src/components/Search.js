import React from "react";
import Button from "./Button";

const Search = props => {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={props.search}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={props.value}
                onChange={props.handleSearchInput}
              />
              <Button class="danger" text="Search" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

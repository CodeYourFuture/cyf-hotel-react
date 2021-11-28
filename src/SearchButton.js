import React from "react";

function SearchButton() {
  return (
    <form className="form-group search-box">
      <div className="form-div">
        <label htmlFor="customerId">Customer id</label>
        <div className="search-row">
          <input
            type="text"
            id="customerId"
            className="form-control"
            placeholder="Customer id"
          />
          <button className="btn btn-info">Search IDs</button>
        </div>
      </div>
      <div className="form-div">
        <label htmlFor="customerName">Customer name</label>
        <div className="search-row">
          <input
            type="text"
            id="customerName"
            className="form-control"
            placeholder="Customer name"
          />
          <button className="btn btn-info">Search Names</button>
        </div>
      </div>
    </form>
  );
}

export default SearchButton;

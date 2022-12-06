import React from "react";

const SearchBtn = () => {
  return (
    <form className="form-group search-box">
      <label htmlFor="customerName">Customer name</label>
      <div className="search-row">
        <input
          type="text"
          id="customerName"
          className="form-control"
          placeholder="Customer name"
        />
        <button className="btn btn-primary">Search</button>
      </div>
    </form>
  );
};

export default SearchBtn;

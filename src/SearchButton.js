import React from "react";

function SearchButton() {
  return (
    <div className="search-row">
      <input
        type="text"
        id="customerName"
        className="form-control"
        placeholder="Customer name"
      />
      <button className="btn btn-success">Search</button>
    </div>
  );
}
export default SearchButton;

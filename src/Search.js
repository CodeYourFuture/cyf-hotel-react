import React, { useState } from "react";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  const [idSearchInput, setIdSearchInput] = useState("");

  const idSearchHandler = e => setIdSearchInput(e.target.value);
  const submitIdSearchInput = e => {
    e.preventDefault();
    props.search(idSearchInput);
  };

  const handleSearchInput = e => setSearchInput(e.target.value);
  const submitSearchInput = e => {
    e.preventDefault();
    props.search(searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-center search-bookings">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={submitIdSearchInput}>
            <label className="customer-id" htmlFor="customerId">
              Customer ID
            </label>
            <div className="search-row">
              <input
                type="number"
                id="customerID"
                className="form-control"
                placeholder="Search by customer's id"
                value={idSearchInput}
                onChange={idSearchHandler}
              />
              <button className="btn btn-primary search-ids">Search IDs</button>
            </div>
          </form>
        </div>
        <div className="col">
          <form onSubmit={submitSearchInput}>
            <label className="customer-name" htmlFor="customerName">
              Customer name
            </label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Search by customer's name"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <button className="btn btn-primary search-names">
                Search Names
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

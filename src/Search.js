import React, { useState } from "react";
import SearchResults from "./SearchResults";
const SearchButton = () => {
  const [searchVal, setSearchVal] = useState();
  const handleChange = event => {
    setSearchVal(event.target.value);
  };
  console.log(searchVal);
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchVal}
                onChange={handleChange}
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </form>
          <SearchResults results={searchVal} />
        </div>
      </div>
    </div>
  );
  console.log(searchVal + "search");
};

export default SearchButton;

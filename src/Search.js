import React, { useState } from "react";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            className="form-group search-box"
            onSubmit={(e) => {
              e.preventDefault();
              props.search(searchInput);
            }}
          >
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                onChange={handleSearchInput}
                value={searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
// export
export default Search;

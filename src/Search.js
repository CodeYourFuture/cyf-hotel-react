import React, { useState } from "react";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");

  const whenSubmit = event => {
    event.preventDefault();
    props.search(searchInput);
  };

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={whenSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                value={searchInput}
                onChange={handleSearchInput}
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const SearchButton = () => {
  return <button className="btn btn-primary">Search</button>;
};

export default Search;

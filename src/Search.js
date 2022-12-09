import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  const onSubmit = event => {
    event.preventDefault();
    props.search(searchInput);
  };
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
    if (event.target.name === "searchInput") {
      setSearchInput(event.target.value);
      // console.log(event.target.value);
    }
  }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={onSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton />
              <>
                <input
                  type="text"
                  name="searchInput"
                  placeholder="search Input"
                  value={searchInput}
                  onChange={handleSearchInput}
                />
              </>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Search;

import React, { useState } from "react";
import Button from "./SearchButton";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = event => {
    const searchValue = event.target.value;
    console.log(searchValue);
    setSearchInput(searchValue);
  };

  const handlerSubmit = event => {
    event.preventDefault();
    search(searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handlerSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
              />

              <Button />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

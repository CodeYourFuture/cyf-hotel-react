import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  const [searchInput, setInput] = useState("");
  const setChange = e => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            onSubmit={e => {
              props.search(searchInput);
              e.preventDefault();
            }}
            className="form-group search-box"
          >
            <div className="search-row">
              <input
                value={searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="CustomerName"
                onChange={setChange}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

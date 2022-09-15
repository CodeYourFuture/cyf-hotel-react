import React, { useState } from "react";
import SearchButton from "./SearchButton";
import SearchResults from "./SearchResults";
const Search = () => {
  const HandelSearchInput = () => {};
  const [SearchInput, setSearchInput] = useState("");
  console.log(SearchInput);
  return (
    <div className="search">
      <>
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form className="form-group search-box">
              <label
                onChange={event => setSearchInput(event.target.value)}
                htmlFor="customerName"
              >
                Customer name
              </label>
              <div className="search-row">
                <input
                  type="text"
                  id="customerName"
                  value={SearchInput}
                  className="form-control"
                  onChange={event => setSearchInput(event.target.value)}
                  placeholder="Customer name"
                />
                <SearchButton />
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default Search;

import React, { useState } from "react";
import SearchBooking from "./SearchBooking";
import SearchButton from "./SearchButton";
import SearchCustomerLabel from "./SearchCustomerLabel";
import SearchInput from "./SearchInput";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.search(searchInput);
  };

  return (
    <div className="search">
      <SearchBooking />
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={handleSubmit} className="form-group search-box">
            <SearchCustomerLabel />
            <div className="search-row">
              <SearchInput value={searchInput} onChange={handleSearchInput} />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

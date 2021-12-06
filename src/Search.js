import React, { useState } from "react";

const SearchButton = () => {
  return <button className="search-button">Search</button>;
};

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
    setSearchInput(event.target.value);
    console.log(searchInput);
  }
  console.log(searchInput);
  function handleSubmit(event) {
    event.preventDefault();
    props.search(searchInput);
  }
  return (
    <div className="search">
      <div className="page-header" />
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Search Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                onChange={handleSearchInput}
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

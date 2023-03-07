import React, { useState } from "react";
import SearchButton from "./SearchButton";
import ShowFullListButton from "./ShowFullListButton";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.search(searchInput);
    //removing value from the input field
    if (searchInput !== "") {
      setSearchInput("");
      props.search("");
    }
  };

  return (
    <div className="search">
      <div className="page-header">
        <div className="search-header">
          <h1 className="text-left">Guest list</h1>
          <h3>- Search bookings</h3>{" "}
        </div>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
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
              <div className="search-buttons">
                <SearchButton />
                <ShowFullListButton showFullList={props.showFullList} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

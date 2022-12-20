import React, { useState } from "react";
import SearchButtom from "./component/SearchButtom";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
    let newInput = event.target.value;
    setSearchInput(newInput);
  }
  // function submit(event){
  //   event.preventDefault();
  //   search(searchInput)
  // }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings{searchInput}</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            className="form-group search-box"
            onSubmit={event => {
              event.preventDefault();
              search(searchInput);
            }}
          >
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
              {/* <button className="btn btn-primary">Search</button> */}
              <SearchButtom />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ search, setBookings }) => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }
  // console.log(searchInput);

  function onSubmit(e) {
    e.preventDefault();
    if (searchInput) {
      search(searchInput);
    }
  }

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onClick={onSubmit}>
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
              {/* task 01 */}
              <SearchButton searchbtn="Search" />
              {/* test */}
              {/* <div>
                <p> {searchInput} </p>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// function SearchButton() {
//   return <button className="btn btn-primary">Search</button>;
// }

export default Search;

import React, { useState } from "react";
import SearchButton from "./SearchButton"; // imported search button component in to search js

const Search = () => {
  const [searchInput, setSearchInput] = useState(""); // declared  the state variable set its value to an empty array
  const handleSearchInput = event => {
    //this is the change handler function that takes an event as an arguments
    setSearchInput(event.target.value); //set search input function takes takes the user input by event.target.value
  };
  console.log(searchInput); // logs the user input to the dev console.

  return (
    /* search field  */
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                onChange={handleSearchInput} // onchange calls the event handler
                value={searchInput} //the value of input is equal to search input
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton /> {/*rendered search button in search*/}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

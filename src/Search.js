import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = event => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  };

  //   Still in the <Search /> component, add a onSubmit handler to the <form> tag. When the form is submitted (try clicking the search button), get the value of the state searchInput and pass it as a parameter to the search prop function that has been provided for you (the search prop is passed from the <Bookings /> component).

  // Note: Also your submit handler should take an event parameter and add the line event.preventDefault() to prevent the browser to implicitely submit the form).

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
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
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;

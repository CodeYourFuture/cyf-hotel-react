import React, { useState, useEffect } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  // searchInput is a state variable to store the input value of input text
  // the initial value of the state variable is a string because the type of value of input is in string form
  const [searchInput, setSearchInput] = useState("");

  // onChange's function which deals with setSearchInput to update searchInput
  function handleSearchInput(e) {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  }

  // Handler function deals with the data getting from the form
  const handler = e => {
    e.preventDefault();
    console.log(e.target["keyword"].value);
    // e.target["keyword"].value : to get the value of spaciefic target with declaring the name prop.
    // props.search is a function in bookings component. between the paranthesses of search is the argument/parameter of that function which is the value of input. go to bookings
    props.search(e.target["keyword"].value);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          {/* Add onSubmit prop to the form. Create the function than can handle the form */}
          <form className="form-group search-box" onSubmit={handler}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                name="keyword"
                className="form-control"
                placeholder="Customer name"
                // the value is searchInput variable. That means whatever a user input will be store as a value.
                value={searchInput}
                // onChange with the name of a function that deal with setSearchInput function to update the state variable "searchInput". So when the user type in search field, onChange will call the function "handleSearchInput". This function will update the state variable "searchInput" as well as the value.
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

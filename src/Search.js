import React from "react";
import SearchButton from "./SearchButton";
import { useState } from "react";


const Search = (props) => {
  const [searchInput, setsearchInput] = useState("");
  function handleSearchInput (event){
    setsearchInput(event.target.value)
  }
  function handleSubmit (event){
    event.preventDefault();
   props.search (searchInput);
  }
 
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
                onChange={handleSearchInput}
                value = {searchInput}
            
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

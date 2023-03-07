import React, {useState} from "react";
import SearchButton from "./SearchButton";

const Search = () => {

  const [searchInput, setsearchInput] = useState ('')

  function handleSearchInput (event){
    setsearchInput(event.target.value)
    console.log(event.target.value)
  }

  return (
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
                onChange={handleSearchInput}
                value = {searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
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

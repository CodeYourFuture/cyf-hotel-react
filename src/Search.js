import React, { useState } from "react";
const SearchButton = () =>{
  return(
    <button className="btn btn-primary">Search</button>
  );
}

const Search = ({search}) => {
  const [searchInput, setsearchInput] = useState("")

  const handleSearchInput = (event) =>{
    setsearchInput(event.target.value);
    console.log(searchInput)

  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              search(searchInput);
            }}
            className="form-group search-box"
          >
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                onChange={handleSearchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
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

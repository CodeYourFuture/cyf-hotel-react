import React, {useState} from "react";
import SearchButton from "./SearchButton";

const Search = (props) => {

  const [searchInput, setsearchInput] = useState ('')

  function handleSearchInput (event){
    setsearchInput(event.target.value)
    console.log(event.target.value)
  }
  
  function handleSubmit (e) {
    e.preventDefault()
    console.log(e.currentTarget.elements.customerName.value)
    props.search(e.currentTarget.elements.customerName.value)
  }

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit = {handleSubmit}>
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

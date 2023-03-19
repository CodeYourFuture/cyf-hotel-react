import React, { useState } from "react";


const Search = (props) => {
  const [searchInput, setSearchInput]= useState ("");
  
  const handleSearchInput = (event)=> {
    setSearchInput(event.target.value)
    console.log(searchInput)
  };
  const handleSubmit = (event)=> {
    event.preventDefault();
    props.search(searchInput)
    };
  
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={()=> handleSubmit (event)}>

            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input value = {searchInput}
              onChange={()=>handleSearchInput(event)}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton/>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
function SearchButton(){
  return <button className="btn btn-primary">Search</button>

}

export default Search;

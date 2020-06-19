import React, {useState} from "react";
import SearchButton from "./SearchButton";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("")

  function handleSearchInput(event){
     setSearchInput(event.target.value)
     event.preventDefault()
     console.log(event.target.value)
  }
 
  function submitHandler(event){
    props.search(searchInput)
    event.preventDefault()
   console.log(event) 
  }

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={submitHandler}>
            <label htmlFor="customerName">Customer name</label>
            <SearchButton searchInput={searchInput} handleSearchInput={handleSearchInput} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;


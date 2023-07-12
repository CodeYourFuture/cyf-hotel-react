import React, { useState } from "react";
import SearchButton from "./SearchButton";
import Header from "./Header";



const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event) {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    console.log(inputValue);

    const handleSubmit = (event) => {
      event.preventDefault();
      search(searchInput);
      };
      
  return (
    <div>
    < Header/>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            < SearchButton/>
          </form>
      </div>
    </div>
    </div>
  );
};
};

export default Search;

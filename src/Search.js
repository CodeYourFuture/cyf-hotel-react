import React, { useState } from "react";
import SearchButton from "./SearchButton";
import Header from "./Header";



const Search = () => {
  let searchInput = useState();
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

export default Search;

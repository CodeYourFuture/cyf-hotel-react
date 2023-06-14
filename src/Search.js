import React from "react";
import SearchButton from "./SearchButton";

const Search = () => {
  return (
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

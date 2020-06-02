import React from "react";
import SearchInput from "./SearchInput";

const Search = () => {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Search;

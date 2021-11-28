import React from "react";
import SearchButton from "./SearchButton";

const Search = () => {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left font-weight-bold text-success">
          Search Bookings
        </h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <SearchButton />
        </div>
      </div>
    </div>
  );
};

export default Search;

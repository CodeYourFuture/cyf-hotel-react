import React from "react";
import SearchInput from "./SearchInput";

const Search = props => {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <SearchInput searchForName={props.search} />
        </div>
      </div>
    </div>
  );
};

export default Search;

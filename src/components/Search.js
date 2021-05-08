import React from "react";
import SearchInput from "./SearchInput";

const Search = ({ searchForName }) => {
  return (
    <div className="search lg-col-10">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col-12">
          <SearchInput searchForName={searchForName} />
        </div>
      </div>
    </div>
  );
};

export default Search;

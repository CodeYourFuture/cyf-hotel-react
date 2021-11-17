import React from "react";
import SearchResultsHeading from "./SearchResultsHeading";
import SearchResultsBody from "./SearchResultsBody"
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  return (
    <div className="Search-results">
      <div className="container">
        <div className="table-responsive mb-3 mt-3">
          <table
            className="table table-bordered"
            width="100%"
            id="bookingsTable"
          >
            <SearchResultsHeading />
            <SearchResultsBody bookings={props.results} />
          </table>
        </div>
        <div>
          <CustomerProfile id={props.id} /> 
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

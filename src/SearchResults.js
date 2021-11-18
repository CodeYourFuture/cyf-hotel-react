import React, { useState } from "react";
import SearchResultsHeading from "./SearchResultsHeading";
import SearchResultsBody from "./SearchResultsBody"
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  const [customerId, setCustomerId] = useState("");
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
            <SearchResultsBody bookings={props.results} setCustomerId={setCustomerId}/>
          </table>
        </div>
        <div>
          {
            customerId !== "" ? <CustomerProfile id={customerId} setCustomerId={setCustomerId} /> : null
          } 
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

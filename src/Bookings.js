import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults /> */}
        <SearchResults results={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;

//import fakebooking in booking-Done
//comment out you searchResults component-Done
//uncomment default searchRresults comp-Done

//SearcRsults file
//comment out searchResults
//make copy of function
// maybe import fakebookigs & bookings?
//pass props argument in SearchResults
//copy code from table & thx8
//maybe use {results.keys} to access json data

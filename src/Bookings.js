import React from "react";
import Search from "./Search.js";
import SearchResult from "./Hotel.js";
import FakeBookings from "./data/fakeBookings.json";
//
// const results = FakeBookings;
// console.log(FakeBookings);
const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResult.SearchResults results={FakeBookings} />
        {/* <SearchResult.SearchResults/> */}
      </div>
    </div>
  );
};

export default Bookings;

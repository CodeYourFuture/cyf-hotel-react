import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import ActiveSearchResult from "./ActiveSearchResult";
// var FakeBookings = require("./data/fakeBookings.json");
import FakeBookings from "./data/fakeBookings.json";

const search = searchVal => {
  console.info("TO DO!", searchVal);
};

const Bookings = () => {
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={FakeBookings} />
        {/* <ActiveSearchResult /> */}
        {/* <SearchResults /> */}
      </div>
    </div>
  );
};

export default Bookings;

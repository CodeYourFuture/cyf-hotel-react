import React from "react";
import Search from "./Search.js";
import SearchResult from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import moment from "moment";

const Bookings = () => {
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };
  const fakeBookingData = FakeBookings;
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResult data={fakeBookingData} />
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;

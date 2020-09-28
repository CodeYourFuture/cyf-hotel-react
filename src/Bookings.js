import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "../src/data/fakeBookings.json";
var allData;

const Bookings = () => {
  const [bookings, setBookings] = useState(fakeBookings);
  const bookingRecord = () => {
    setBookings(fakeBookings + 1);
  };

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults fakeBookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

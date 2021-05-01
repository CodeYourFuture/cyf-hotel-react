/* eslint-disable indent*/
import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import bookingData from "./data/fakeBookings.json";
const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  const [bookings, setBookings] = useState(bookingData);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
      </div>
      <SearchResults data={bookings} />
    </div>
  );
};

export default Bookings;

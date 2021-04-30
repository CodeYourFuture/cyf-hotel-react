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
  //   function updateBookings() {
  //   setBookings;
  // }
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
      </div>
      <SearchResults />
    </div>
  );
};

export default Bookings;

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  const [bookings, setBookings] = useState(FakeBookings);
  //useEffect(() => {
  //setBookings(FakeBookings);
  //}, [])
  console.log(bookings);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />

        <SearchResults results={bookings} />
        {/* <SearchResults /> */}
      </div>
    </div>
  );
};

export default Bookings;

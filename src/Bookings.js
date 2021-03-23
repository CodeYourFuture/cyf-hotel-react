import React, { useState } from "react";
import Search from "./Search.js";
import SearchResult from "./Hotel";
import FakeBookings from "./data/fakeBookings.json";
console.log(FakeBookings);

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResult.SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

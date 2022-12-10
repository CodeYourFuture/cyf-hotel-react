import React, { useState } from "react";
import Search from "./Search.js";
import FakeBooking from "./data/fakeBookings.json";
import SearchResults from "./SearchResults";
const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  const [bookings, setBooking] = useState(FakeBooking);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults searchResultBookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

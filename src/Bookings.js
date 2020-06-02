import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import FakeBookingsData from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  const [bookings, SetBookings] = useState(FakeBookingsData);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults BookingsData={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

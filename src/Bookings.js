import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  let BookingData = require("./data/fakeBookings.json");
  // eslint-disable-next-line
  const [Booking, setBooking] = useState(BookingData);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults BookingData={Booking} />
      </div>
    </div>
  );
};

export default Bookings;

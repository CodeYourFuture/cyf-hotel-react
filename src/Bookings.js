import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  // This function is just to handle the setBookings warning for deploying in netlify.
  const handleBooking = () => {
    setBookings();
  };

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} onClick={handleBooking} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

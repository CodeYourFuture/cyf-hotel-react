import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults/SearchResults";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  // This function is declared to handle the setBookings warning, which fails to deploy on netlify. Even the onClick on the Search Component is fake.
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
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

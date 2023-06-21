import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((response) => response.json())
      .then((data) => setBooking(data));
  });
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults booking={booking} />
      </div>
    </div>
  );
};

export default Bookings;

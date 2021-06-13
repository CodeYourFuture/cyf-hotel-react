import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, useBookings] = useState(FakeBookings);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults data = {bookings} color = "white"/>
      </div>
    </div>
  );
};

export default Bookings;

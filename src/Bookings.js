import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  return (
    bookings && (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          {/* <SearchResults results={FakeBookings} /> */}
          <SearchResults bookings={bookings} />
        </div>
      </div>
    )
  );
};

export default Bookings;

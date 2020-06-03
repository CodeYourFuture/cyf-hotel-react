import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(fakeBookings);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};
export default Bookings;

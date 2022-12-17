import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBookings = [];
    bookings.forEach(booking => {
      if (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      ) {
        filteredBookings.push(booking);
      }
    });
    setBookings(filteredBookings);
  };

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log("use effect...");
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        {/* <SearchResults /> */}
      </div>
    </div>
  );
};

export default Bookings;

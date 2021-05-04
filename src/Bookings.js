import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(fakeBookings);
  const [filteredBookings, setfilteredBookings] = useState(bookings);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);
  const search = searchVal => {
    if (searchVal === "") {
      setfilteredBookings(bookings);
    } else {
      const newFilteredBookings = bookings.filter(booking => {
        return booking.firstName
          .toLowerCase()
          .includes(searchVal.toLowerCase());
      });
      setfilteredBookings(newFilteredBookings);
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={filteredBookings} />
      </div>
    </div>
  );
};
export default Bookings;

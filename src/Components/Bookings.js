import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        setBookings(data);
      })
      .catch(err => console.log(err));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  function filterBooking(searchVal) {
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
  }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} filterBooking={filterBooking} />
        <SearchResults data={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

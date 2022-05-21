import React, { useState, useEffect } from "react";
import Search from "../Search.js";
import SearchResults from "./SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [initialBookings, setInitialBookings] = useState([]);
  const API_URL = "https://cyf-react.glitch.me";

  const search = searchVal => {
    if (searchVal.length === 0) {
      setBookings(initialBookings);
      return;
    }
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase.includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase.includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
  };

  useEffect(() => {
    fetch(API_URL)
      .then(data => data.json())
      .then(json => {
        setBookings(json);
        setInitialBookings(json);
      });
  }, []);

  console.log(bookings);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults result={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

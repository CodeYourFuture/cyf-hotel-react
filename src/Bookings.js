//import React from "react";
import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  const search = searchVal => {
    const filterbooking = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal) ||
        booking.surname.toLowerCase().includes(searchVal)
      );
    });
    setBookings(filterbooking);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />

        {<SearchResults FakeBookings={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;

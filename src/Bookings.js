import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    const filteredBookings = bookings.filter(booking => {
      const firstName = booking.firstName;
      const surname = booking.surname;
      return searchVal === firstName || searchVal === surname;
    });

    console.log(filteredBookings);
    setBookings(filteredBookings);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(bookingInfo => setBookings(bookingInfo));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings.length !== 0 ? <SearchResults results={bookings} /> : ""}
      </div>
    </div>
  );
};

export default Bookings;

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  //const [bookings, setBookings] = useState(null);
  //const [loading, setLoading] = useState(true);
  //const [errorMessage, setErrorMessage] = useState(null);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBooking = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBooking);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

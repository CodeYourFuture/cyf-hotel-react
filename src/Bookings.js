import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  useEffect(() => {
    setLoadingData(false);
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoadingData(true);
      });
  }, []);
  const search = (searchVal) => {
    const filteredBooking = bookings.filter((booking) => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(filteredBooking);
    // console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loadingData ? (
          <SearchResults results={bookings} />
        ) : (
          <h1 class="blink_me">Loading.....</h1>
        )}
      </div>
    </div>
  );
};

export default Bookings;

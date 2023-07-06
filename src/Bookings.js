import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = (searchVal) => {
    const filteredBooking = bookings.filter(
      (booking) =>
        booking.firstName === searchVal || booking.surname === searchVal
    );
    setBookings(filteredBooking);

    // setBookings(filteredBooking);
    // console.info("TO DO!", searchVal);
  };
  useEffect(() => {
    // console.log("sdasdahgj");
    fetch(`https://cyf-react.glitch.me`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

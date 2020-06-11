import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [original, setOriginal] = useState();
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setOriginal(data);
      });
  }, []);
  if (!bookings) {
    return <h1>. Looding . . .</h1>;
  }
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const searchBooking = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(searchBooking);
    console.log(searchBooking);
    console.log("this is search ");
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search
          search={search}
          bookings={bookings}
          setBookings={setBookings}
          original={original}
        />
        <SearchResults data={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

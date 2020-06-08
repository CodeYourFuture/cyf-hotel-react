import React, { useState, useEffect } from "react";
import Search from "./Search";
import { SearchResults } from "./components";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = searchVal => {
    const filteredBooking = bookings.filter(name => {
      return (
        name.firstName.toLowerCase() === searchVal.toLowerCase() ||
        name.lastName.toLowerCase() === searchVal.toLowerCase()
      );
    });
    setBookings(filteredBooking);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);
  if (!bookings) {
    return "Loading...";
  }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults customerBookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

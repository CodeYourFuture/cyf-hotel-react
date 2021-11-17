import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = searchVal => {
    searchVal = searchVal.toLowerCase();
    const filteredSearchedNames = bookings.filter((booking) => {
      return booking.firstName.toLowerCase() === searchVal || booking.surname.toLowerCase() === searchVal;
    })
    setBookings(filteredSearchedNames);
  };
  useEffect(() => {
    fetch("https://omer-hotel-server.glitch.me/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [])

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

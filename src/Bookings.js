import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  const search = searchVal => {
    const filteredBooking = bookings.filter(({ firstName, surname }) => {
      return firstName === searchVal || surname === searchVal;
    });
    setBookings(filteredBooking);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

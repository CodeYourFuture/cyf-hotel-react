import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const filteredBookings = bookings.filter(({ firstName, surname }) => {
      if (firstName === searchVal || surname === searchVal) {
        return true;
      } else {
        return false;
      }
    });
    setBookings(filteredBookings);
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

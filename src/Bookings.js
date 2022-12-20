import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
const Bookings = () => {
  const [booking, setBooking] = useState([]);
  const search = searchVal => {
    searchVal = searchVal.toLowerCase();
    setBooking(
      booking.filter(
        booking =>
          booking.firstName.toLowerCase() === searchVal ||
          booking.surname.toLowerCase() === searchVal
      )
    );

    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        setBooking(data);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={booking} />
      </div>
    </div>
  );
};

export default Bookings;

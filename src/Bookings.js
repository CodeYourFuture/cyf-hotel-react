import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [display, setDisplay] = useState(true);

  const search = searchVal => {
    if (searchVal === "") {
      setBookings(bookings);
    } else {
      let bookingFinds = bookings.filter(booking => {
        return (
          booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          booking.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
      });
      setBookings(bookingFinds);
    }
  };

  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilterBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        setDisplay(false);
        setBookings(data);
      });
  }, []);

  return (
    <div className="App-content">
      {display && <div>Loading...</div>}
      {bookings && (
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      )}
    </div>
  );
};

export default Bookings;

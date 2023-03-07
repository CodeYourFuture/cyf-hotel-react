import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [bookings, setBookings] = useState([]);

  const search = (searchVal) => {
    const filterBookings = bookings.filter(
      (booking) =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filterBookings);
  };

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

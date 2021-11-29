import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchedBookings, setSearchedBookings] = useState([]);
  const search = searchVal => {
    const filteredBookings = bookings.filter(booking => {
      const { firstName, surname } = booking;
      return firstName.includes(searchVal) || surname.includes(searchVal);
    });
    setSearchedBookings(filteredBookings);
  };
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        setBookings(data);
        setSearchedBookings(data);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={searchedBookings} />
      </div>
    </div>
  );
};

export default Bookings;

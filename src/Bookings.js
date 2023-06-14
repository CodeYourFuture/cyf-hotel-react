import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const search = (searchVal) => {
    setSearchVal(searchVal);
    const filteredBookings = bookings.filter(
      (booking) =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setFilteredBookings(filteredBookings);
  };

  const resetSearch = () => {
    setSearchVal("");
    setFilteredBookings(bookings);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setFilteredBookings(data);
      });
  }, []);

  return (
    <div className="App-content my-4">
      <div className="container">
        <Search search={search} resetSearch={resetSearch} />
        <SearchResults results={filteredBookings} />
      </div>
    </div>
  );
};

export default Bookings;

// setBookings(bookings.filter((person)=> person.firstName == searchVal || person.surname == searchVal))

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import "./App.css";
const Data = [
  "Button",
  "id",
  "title",
  "first name",
  "sure name",
  "email",
  "room id",
  "check in date",
  "check out date",
  "number of nights",
  "customer's profile"
];

const Bookings = () => {
  let [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log("Working !");
    fetch("https://cyf-react.glitch.me/")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    console.log(bookings);
    console.log(searchVal);
    if (searchVal === "") {
      return setBookings(bookings);
    } else {
      bookings = bookings.filter(
        booking =>
          booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
      console.log(bookings);
      setBookings(bookings);
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <h1>Bookings</h1>
        <SearchResults table={Data} results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

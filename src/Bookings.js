import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import "./App.css";
const data = [
  "id",
  "title",
  "first name",
  "sure name",
  "email",
  "room id",
  "check in date",
  "check out date",
  "number of nights"
];

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log("Working !!!!!!!!");
    fetch("https://cyf-react.glitch.me/")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <h1>Bookings</h1>
        <SearchResults table={data} results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

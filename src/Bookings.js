import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import "./App.css";

const Bookings = () => {
  const [bookingData, setBookingData] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.illicitonion.com/")
      .then(res => res.json())
      .then(data => setBookingData(data));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const searchResult = bookingData.filter(person => {
      return (
        person.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        person.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookingData(searchResult);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookingData} />
      </div>
    </div>
  );
};

export default Bookings;

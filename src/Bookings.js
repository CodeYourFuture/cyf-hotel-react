import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings";
import "./App.css";

const Bookings = () => {
  const [bookingData, setBookingData] = useState([]);
  console.log(bookingData);
  useEffect(() => {
    fetch("https://cyf-react.illicitonion.com/")
      .then(res => res.json())
      .then(data => setBookingData(data));
  }, []);
  const searchForName = inputValue => {
    const searchResult = bookingData.filter(person => {
      return (
        person.firstName.toLowerCase().includes(inputValue.toLowerCase()) ||
        person.surname.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
    setBookingData(searchResult);
  };

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} searchForName={searchForName} />
        <SearchResults results={bookingData} />
      </div>
    </div>
  );
};

export default Bookings;

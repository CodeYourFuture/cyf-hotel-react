import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
//import FakeBookingsData from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    //console.info("TO DO!", searchVal);

    const filteredData = bookings.filter(function(bookings) {
      return (
        bookings.firstName.toLowerCase() === searchVal.toLowerCase() ||
        bookings.surname.toLowerCase() === searchVal.toLowerCase()
      );
    });

    searchVal.trim() === ""
      ? setBookings(originalData)
      : setBookings(filteredData);
  };

  const [bookings, setBookings] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    fetch(
      `https://babakjahangiri.github.io/cyf-hotel-react/src/data/fakeBookings.json`
    )
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setOriginalData(data);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookingsData={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

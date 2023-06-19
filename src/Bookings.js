import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setMasterBookings(data);
      });
  }, []);
  let [bookings, setBookings] = useState([]);
  let [masterBookings, setMasterBookings] = useState([]);

  const search = (searchVal) => {
    let filteredBookings = masterBookings.filter((abooking) => {
      console.log(abooking);
      return (
        abooking.firstName.includes(searchVal) ||
        abooking.surname.includes(searchVal)
      );
    });
    setBookings(filteredBookings);
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

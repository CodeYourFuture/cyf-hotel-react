import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [loadingData, setLoadingData] = useState(true);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filterBookings = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(filterBookings);
  };

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      // fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBookings(data))
      .then(() => {
        setLoadingData(false);
      });
  }, []);
  return (
    <div className="app-content">
      <div className="container">
        <Search search={search} />
        {loadingData && (
          <div className="text-center" role="status">
            <span className="spinner-grow" />
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

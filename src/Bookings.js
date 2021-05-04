import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBooking] = useState([]);
  const [loading, setLoading] = useState(false);
  const search = searchVal => {
    console.log("TO DO!", searchVal);
    let searchResult = bookings.filter(booking => {
      console.log(booking.firstName);
      return (
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
      );
    });
    setBooking(searchResult);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        setBooking(data);
        setLoading(true);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!loading && (
          <p className="text-center p-3 bg-warning">Data is loading...</p>
        )}
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

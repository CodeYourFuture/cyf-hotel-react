import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const [loaded, setLoaded] = useState(false);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase() === searchVal ||
        booking.surname.toLowerCase() === searchVal
    );
    setBookings(filteredBookings);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoaded(true);
      })
      .catch(error =>
        alert("Sorry unexpected error... Please try again later")
      );
  }, []);

  return !loaded ? (
    <div>LOADING ...</div>
  ) : (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} setBookings={setBookings} />
      </div>
    </div>
  );
};

export default Bookings;

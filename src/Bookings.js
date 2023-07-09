import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const search = (searchVal) => {
    const filteredBooking = bookings.filter(
      (booking) =>
        booking.firstName === searchVal || booking.surname === searchVal
    );
    setBookings(filteredBooking);

    // setBookings(filteredBooking);
    // console.info("TO DO!", searchVal);
  };
  useEffect(() => {
    // console.log("sdasdahgj");
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
        setLoadingData(true);
      });
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loadingData ? (
          <SearchResults results={bookings} />
        ) : (
          <h1 className="loading-data-message">
            Please wait, the data is loading...
          </h1>
        )}
      </div>
    </div>
  );
};

export default Bookings;

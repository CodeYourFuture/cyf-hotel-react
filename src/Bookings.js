import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
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
    fetch(`https://cyf-react.glitch.me/`)
      .then((res) => {
        if (!res.ok) {
          throw Error(
            `Could not fetch the data for that resource. Error status: ${res.status}`
          );
        }
        return res.json();
      })

      .then((data) => {
        console.log(data);
        setBookings(data);
        setIsPending(true);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {error ? (
          <div>{error}</div>
        ) : isPending ? (
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

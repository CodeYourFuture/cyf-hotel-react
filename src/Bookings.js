import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const search = (searchVal) => {
    console.log(searchVal);
    const filteredBookings = bookings.filter(
      (booking) =>
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
    );
    setBookings(filteredBookings);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://cyf-react.glitch.me/error")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBookings(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading ? (
          <p>Loading... Please wait.</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;

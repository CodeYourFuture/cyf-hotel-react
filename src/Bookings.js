import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIserror] = useState(false);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/`)
      .then(res => {
        if (!res.ok) {
          setIserror(true);
        }
        return res.json();
      })
      .then(data => {
        setBookings(data);
        console.log("all Bookings ", bookings);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  const search = searchValue => {
    if (searchValue) {
      console.log("searchVal ", searchValue);
      console.log("Bookings ", bookings);
      const filteredBookings = bookings.filter(
        booking =>
          booking.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
          booking.surname.toLowerCase().includes(searchValue.toLowerCase())
      );
      setBookings(filteredBookings);
    }
  };

  return isError ? (
    <div className="message">An error occurred while fetching data</div>
  ) : isLoading ? (
    <div className="message">Loading, please wait...</div>
  ) : (
    <div className="App-content">
      <div className="container">
        <Search searchFunction={search} />
        <SearchResults searchReslt={bookings} setBookings={setBookings} />
      </div>
    </div>
  );
};

export default Bookings;

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://cyf-react.glitch.m")
      .then(response => response.json())
      .then(data => {
        setBookings(data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} bookings={bookings} setBookings={setBookings} />
        <SearchResults data={bookings} loading={isLoading} />
      </div>
    </div>
  );
};

export default Bookings;

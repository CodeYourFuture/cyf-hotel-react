import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);

  async function fetchApi() {
    setIsLoading(true);
    await fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(err => setErr(err));
    setIsLoading(false);
  }

  useEffect(() => {
    fetchApi();
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

        <SearchResults data={bookings} loading={isLoading} error={err} />
        <hr />
      </div>
    </div>
  );
};

export default Bookings;

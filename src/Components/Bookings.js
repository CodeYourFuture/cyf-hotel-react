import React, { useState, useEffect } from "react";
import AddBooking from "./AddBooking";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
const Bookings = () => {
  const initialBookings = JSON.parse(
    window.localStorage.getItem("bookings" || [])
  );
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);

  async function fetchApi() {
    setIsLoading(true);
    await fetch("https://cyf-react.illicitonion.com/")
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(err => setErr(err));
    setIsLoading(false);
  }

  useEffect(() => {
    if (initialBookings) {
      setBookings(initialBookings);
    } else {
      fetchApi();
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

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
        <AddBooking
          bookings={bookings}
          setBookings={setBookings}
          initialBookings={initialBookings}
        />
        <br />
        <Search
          search={search}
          initialBookings={initialBookings}
          setBookings={setBookings}
        />

        <SearchResults
          data={bookings}
          loading={isLoading}
          error={err}
          setBookings={setBookings}
        />
      </div>
    </div>
  );
};

export default Bookings;

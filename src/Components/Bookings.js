import React, { useState, useEffect } from "react";
import AddBooking from "./AddBooking";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [deleted, setDeleted] = useState(false);

  async function fetchApi() {
    setIsLoading(true);
    await fetch("https://cyf-alexandru-hotel-server.herokuapp.com/bookings")
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
        <AddBooking bookings={bookings} setBookings={setBookings} />
        <br />
        <Search search={search} setBookings={setBookings} />

        <SearchResults
          data={bookings}
          loading={isLoading}
          error={err}
          setBookings={setBookings}
          deleted={deleted}
          setDeleted={setDeleted}
        />
      </div>
    </div>
  );
};

export default Bookings;

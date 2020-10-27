import React, { useState, useEffect } from "react";
import Search from "./Search.js";

import SearchResults from "./SearchResults";
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw data;
        }
        setBookings(data);
        setLoading(false);
      })
      .catch(error => setError(error));
  }, []);

  const addCustomer = customer => {
    customer.id = bookings.length + 1;
    setBookings([...bookings, customer]);
  };

  const search = searchVal => {
    let filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
    console.info("TO DO!", searchVal);
  };
  if (error) {
    return <div id="overlay">{error.error}</div>;
  }

  if (loading) {
    return <div id="overlay">LOADING...</div>;
  }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};
export default Bookings;

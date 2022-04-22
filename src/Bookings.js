import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const URL = "https://cyf-react.glitch.me/delayed";
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const search = searchVal => {
    setBookings(
      bookings.filter(booking => {
        return (
          booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          booking.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
      })
    );
  };

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!loading ? (
          <SearchResults reservations={bookings} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;

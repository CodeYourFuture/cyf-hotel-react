import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const URL = "https://cyf-react.glitch.me/";
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

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
      .then(res => {
        if (res.status === 500) {
          throw new Error(res.status);
        } else {
          return res.json();
        }
      })
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(errorMessage => setErrorMessage(true));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!loading ? (
          <SearchResults reservations={bookings} />
        ) : !errorMessage ? (
          <p>Loading...</p>
        ) : (
          <p>Content Not Found. Please try again.</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;

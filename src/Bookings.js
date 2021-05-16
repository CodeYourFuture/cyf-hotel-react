import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState("");

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filterBookings = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(filterBookings);
  };

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      // fetch(`https://cyf-react.glitch.me`)
      // fetch(`https://cyf-react.glitch.me/error`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw res.status;
        }
      })
      .then(data => setBookings(data))
      .catch(error => {
        setShowError(error);
        setError(true);
      })
      .then(() => {
        setLoadingData(false);
      });
  }, []);
  return (
    <div className="app-content">
      <div className="container">
        <Search search={search} />
        {loadingData && (
          <div className="text-center" role="status">
            <span className="spinner-grow" />
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {error && (
          <div className="text-center bg-danger py-4">
            Oooops!!! You can't get data due to error {showError}
          </div>
        )}
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResult.jsx";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log("data working");
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => {
        if (res.status === 500) {
          throw new Error(res.status);
        } else {
          return res.json();
        }
      })
      .then(data => {
        console.log(data);
        setBookings(data);
        setLoading(false);
      })
      .catch(error => setError(true));
  }, []);

  function search(searchVal) {
    setBookings(
      bookings.filter(guest => {
        return (
          guest.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          guest.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
      })
    );
  }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!loading ? (
          <SearchResults results={bookings} />
        ) : !error ? (
          <p className="loading">Loading..... Please Wait</p>
        ) : (
          <p className="loading">Error..... Content not found</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;

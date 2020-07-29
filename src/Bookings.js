import React, { useState, useEffect } from "react";
//import "./Bookings.css";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      //    fetch("https://cyf-react.glitch.me/delayed")
      //fetch("https://cyf-react.glitch.me/error")
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          throw data;
        }
        console.log(data);
        setBookings(data);
        setLoading(false);
      })
      .catch(error => setError(error));
    console.log("500 HTTP error");
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBooking = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBooking);
  };
  if (loading && !error) {
    return <div> Loading...</div>;
  }
  if (error == null) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      </div>
    );
  } else {
    console.log(error);
    return <div>{error.error}</div>;
  }
};
export default Bookings;

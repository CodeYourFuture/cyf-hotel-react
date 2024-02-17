import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    setLoadingData(false);
    fetch(`https://andrius-hotel-server.onrender.com/bookings`)
      .then((res) => {
        if (!res.ok) {
          throw Error(
            `The fetching of bookings was not successful. Error: ${res.status}`
          );
        }
        return res.json();
      })
      .then((data) => {
        setBookings(data);
        setLoadingData(true);
        setErrorMsg(null);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  }, []);
  const search = (searchVal) => {
    const filteredBooking = bookings.filter((booking) => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });

    setBookings(filteredBooking);
    // console.info("TO DO!", searchVal);
  };

  return (
    <div id="bookings" className="App-content">
      <div className="container">
        {/* <Search search={search} /> */}
        {errorMsg ? (
          <h1> {errorMsg}</h1>
        ) : loadingData ? (
          <SearchResults results={bookings.bookings} />
        ) : (
          <div className="loading-container">
            <h1 className="blink_me">Loading.....</h1>
            <div className="loading-spinner"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;

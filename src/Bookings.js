import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import NewBooking from "./NewBooking";
const Bookings = () => {
  const [bookings, setBookings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBooking = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBooking);
  };

  const addNewBooking = newBooking => {
    const id = bookings.length + 1;
    setBookings([...bookings, { id, ...newBooking }]);
  };

  useEffect(() => {
    setBookings("");
    fetch("https://cyf-react.glitch.me")
      // fetch("https://cyf-react.glitch.me/delayed")
      // fetch("https://cyf-react.glitch.me/error")
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw data;
        }
        setBookings(data);
        setLoading(false);
      })
      .catch(error => setErrorMessage(error));
    console.log("500 HTTP error");
  }, []);
  if (loading && !errorMessage) {
    return <p>Loading...</p>;
  }
  if (errorMessage == null) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
          <NewBooking getNewBooking={addNewBooking} />
        </div>
      </div>
    );
  } else {
    return <div>{errorMessage.error}</div>;
  }
};

export default Bookings;

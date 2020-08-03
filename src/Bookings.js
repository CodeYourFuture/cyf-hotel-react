import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import AddingForm from "./AddingForm";

const Bookings = () => {
  const [bookings, setBooking] = useState([]);
  const [error, setError] = useState(false);
  let filteredBookings = [];
  useEffect(() => {
    //fetch(`https://cyf-react.glitch.me/er`)
    //fetch(`https://cyf-react.glitch.me/delayed`)
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBooking(data))
      .catch(function(e) {
        setError(true);
        console.log(e.message);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBooking(filteredBookings);
    console.log(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!error ? (
          bookings.length ? (
            <SearchResults results={bookings} setBooking={setBooking} />
          ) : (
            "Loading..."
          )
        ) : (
          "Error"
        )}
        <AddingForm bookings={bookings} setBooking={setBooking} />
      </div>
    </div>
  );
};

export default Bookings;

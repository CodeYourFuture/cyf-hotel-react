import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
//import FakeBookings from "./data/fakeBookings.json";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  function search(searchVal) {
    // console.info("TO DO!", searchVal);
    const filterBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
    );
    setBookings(filterBookings);
  }

  // useEffect(() => {
  //   fetch(`https://cyf-react.glitch.me/delayed`)
  //     .then(res => res.json())
  //     .then(data => setBookings(data));

  // }, .catch(err => {setError(err))[]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`) //https://cyf-react.glitch.me/error
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      })
      .catch(err => setError(err));
  }, []);

  // if (error) {
  //   return (
  //     <div>
  //     Error when loading data{error.message}
  //     </div>
  //   )}

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings.length > 0 ? (
          <SearchResults hotelBookings={bookings} />
        ) : (
          <p className="loading">Loading Customer Data Now...</p>
        )}
        {/* <SearchResults hotelBookings={bookings} /> */}
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  );
}

export default Bookings;

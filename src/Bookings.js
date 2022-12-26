import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://hotel-app-express-for-react.glitch.me/bookings`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
          // setLoading(true);
        }
      })
      // .then((data) => data.json())
      .then(bookings => setBookings(bookings))
      .then(data => setLoading(false))
      .catch(error => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal) ||
        booking.surname.toLowerCase().includes(searchVal)
    );
    setBookings(filteredBookings);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading === true ? (
          <p>loading...</p>
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;

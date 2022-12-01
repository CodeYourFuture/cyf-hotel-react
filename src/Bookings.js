import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
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
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

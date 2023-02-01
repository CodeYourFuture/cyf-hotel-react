import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  console.log(`The length of bookings is ${bookings.length}`);
  const search = searchVal => {
    searchVal = searchVal.toLowerCase();
    console.info("TO DO!", searchVal);
    let searchOutput = bookings.filter(
      booking =>
        booking.firstName.toLowerCase() === searchVal ||
        booking.firstName.toLowerCase().includes(searchVal) ||
        booking.surname.toLowerCase() === searchVal ||
        booking.surname.toLowerCase().includes(searchVal)
    );
    setBookings(searchOutput);
  };
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;

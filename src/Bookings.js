import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  let filtered = searchVal.length > 0 ? bookings.filter((booking) => 
    booking.firstName.toLowerCase().includes(searchVal) ||
    booking.surname.toLowerCase() === searchVal
  ) : bookings;
    // console.info("TO DO!", searchVal);
    setBookings(filtered)
  };



  useEffect(() => {
    fetch('https://cyf-react.glitch.me')
    .then(res => res.json())
    .then(data => setBookings(data))
  }
  ,[])

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


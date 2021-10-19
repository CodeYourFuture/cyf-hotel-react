import React, { useState, useEffect } from "react";
import Search from "./Search.js";
// import SearchButton from "./SearchButton.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [booking, setBooking] = useState([]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let searchQuery = searchVal.toLowerCase();
    let filtered = booking.filter(data => {
      if (
        data.firstName.toLowerCase() === searchQuery ||
        data.surname.toLowerCase() === searchQuery
      ) {
        return data;
      }
    });
    setBooking(filtered);
  };

  useEffect(() => {
    console.log("Fetch Data Remotely");

    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(bookingData => setBooking(bookingData));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults /> */}
        <SearchResults results={booking} />
      </div>
    </div>
  );
};

export default Bookings;

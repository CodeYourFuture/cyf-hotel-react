import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [booking, setBooking] = useState([]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBooking(data));
  });

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {<SearchResults results={booking} />}
      </div>
    </div>
  );
};

export default Bookings;

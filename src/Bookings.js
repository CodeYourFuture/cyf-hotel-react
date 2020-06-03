import React, { useState, useEffect } from "react";
import SearchButton from "./Search.js";
import ShowAll from "./ShowAll";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <SearchButton search={search} data={bookings} />
        <ShowAll data={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

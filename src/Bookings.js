import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchVal, setSearchVal] = useState();
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);
  if (!bookings) {
    return <h1>. Looding . . .</h1>;
  }
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} bookings={bookings} setBookings={setBookings} />
        <SearchResults data={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

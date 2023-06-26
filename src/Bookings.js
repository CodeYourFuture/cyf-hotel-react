import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setFiltered(data);
      });
  }, []);

  console.log(bookings);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={filtered} data={setFiltered} />
        <SearchResults results={filtered} />
      </div>
    </div>
  );
};

export default Bookings;

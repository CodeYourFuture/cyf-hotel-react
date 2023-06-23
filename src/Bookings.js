import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.jsx";
//import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, []);
  /* https://www.youtube.com/watch?v=qdCHEUaFhBk */

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings && <SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  useEffect(() => {
    console.log("meow");

    fetch("https://cyf-react.glitch.me")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setBookings(data);
      })
      .catch(err => console.log(err));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  const [bookings, setBookings] = useState([]);

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

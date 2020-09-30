import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
const Bookings = () => {
  const [bookings, setBookings] = useState();
  useEffect(() => {
    console.log("@@@@@@@@@use effect");
    fetch("https://cyf-react.glitch.me")
      .then(function(obj) {
        return obj.json();
      })
      .then(function(data) {
        setBookings(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  return (
    <div className="App-content">
      <div className="container">
        <Search />
        <SearchResults people={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

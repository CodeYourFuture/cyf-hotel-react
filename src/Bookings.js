import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import { useState, useEffect } from "react";

const Bookings = () => {
  const [Bookings, setBookings] = useState([]);
  const search = searchVal => {
    //console.info("TO DO!", searchVal);
    return searchVal;
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={Bookings} />
      </div>
    </div>
  );
};

export default Bookings;

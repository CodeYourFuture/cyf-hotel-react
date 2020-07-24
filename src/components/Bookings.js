import React, { useState, useEffect } from "react";
import "./Bookings.css";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import SearchButton from "./SearchButton.js";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      });
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  if (bookings) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />

          <SearchResults results={bookings} />
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default Bookings;

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const search = searchVal => {
    console.info("Booking for", searchVal);
  };

  const [bookings, setBookings] = useState([]);
  // fetch data from API
  useEffect(() => {
    console.log("fetching");

    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      })
      // error handling
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults /> */}
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

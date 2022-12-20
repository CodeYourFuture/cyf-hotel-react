import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
const Bookings = ({ searchVal }) => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBooking(data);
      });
  }, []);

  return (
    <div className="App-content">
      {/* <h1>{firstName}</h1> */}
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={booking} />
      </div>
    </div>
  );
};

export default Bookings;

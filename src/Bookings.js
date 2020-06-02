import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);
  return (
    <div>
      <div className="table container col-12 col-md-10 ml-sm-1 ml-md-5 ml-lg-auto mr-lg-auto">
        <Search />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

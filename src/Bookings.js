import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, []);
  
  const search = (searchVal) => {
   const filteredBookings = bookings.filter((booking) =>
   booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
   booking.surname.toLowerCase().includes(searchVal.toLowerCase())
   );
   setBookings(filteredBookings);
  }

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

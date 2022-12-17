import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setBookingData(data);
      });
  }, []);

  const search = searchVal => {
    setBookings(
      bookingData.filter(item =>
        item.firstName.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults searchResultBookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

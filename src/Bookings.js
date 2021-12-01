import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";

const Bookings = () => {
  const [booking, setBooking] = useState([]);
  const search = searchVal => {
    const filterCustomer = booking.filter(
      customer =>
        customer.firstName.toLowerCase() === searchVal ||
        customer.surname.toLowerCase() === searchVal
    );
    setBooking(filterCustomer);
  };

  useEffect(() => {
    fetch(
      `https://gulnihal-hotel-server.herokuapp.com${window.location.pathname}`
    )
      .then(res => res.json())
      .then(data => setBooking(data));
    console.log("loading...");
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={booking} />
      </div>
    </div>
  );
};

export default Bookings;

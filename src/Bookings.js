import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CostomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [customerId, setCustomerId] = useState(null);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  const search = searchVal => {
    const filterBookings = bookings.filter(element => {
      return (
        element.firstName.toLowerCase().startsWith(searchVal.toLowerCase()) ||
        element.surname.toLowerCase().startsWith(searchVal.toLowerCase())
      );
    });
    setBookings(filterBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} setCustomerId={setCustomerId} />
        {customerId && <CustomerProfile id={customerId} />}
      </div>
    </div>
  );
};

export default Bookings;

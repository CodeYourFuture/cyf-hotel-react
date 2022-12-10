import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        customer =>
          customer.surname.toLowerCase().includes(searchVal) ||
          customer.firstName.toLowerCase().includes(searchVal)
      )
    );
  };

  const [bookings, setBookings] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;

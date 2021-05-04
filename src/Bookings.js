import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = searchVal => {
    console.log("TO DO!", searchVal);
    const filterBookings = bookings.filter(booking => {
      if (booking.firstName == searchVal || booking.surname == searchVal)
        return true;
      else return false;
    });
    setBookings(filterBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
        <CustomerProfile ID="0" />
      </div>
    </div>
  );
};

export default Bookings;

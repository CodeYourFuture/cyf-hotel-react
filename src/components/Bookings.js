import React, { useEffect, useState } from "react";
import { Search } from "./Search";
import "../App.css";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "../data/fakeBookings.json";

import { SearchResults } from "./SearchResults";

export const Bookings = () => {
  const [booking, setBookings] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
    return () => {};
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBookings = booking.filter(val => {
      return (
        val["firstName"].includes(searchVal) ||
        val["surname"].includes(searchVal)
      );
    });
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content override">
      <Search search={search} />
      {/* <SearchResults results={FakeBookings} /> */}
      <SearchResults results={booking} />
    </div>
  );
};

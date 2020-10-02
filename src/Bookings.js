/* eslint-disable */
import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [hasError, setErrors] = useState(false);
  const [bookings, setBookings] = useState([]);

  //Fetch Data
  async function fetchBookings() {
    const res = await fetch("https://cyf-react.glitch.me");
    res
      .json()
      .then(res => setBookings(res))
      .catch(err => setErrors(err));
  }
  useEffect(() => {
    fetchBookings();
  });
  // console.log(bookings);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  //  console.log(bookings);
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

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResult from "./Hotel";
import FakeBookings from "./data/fakeBookings.json";
// console.log(FakeBookings);

const Bookings = () => {
  const [bookings, setBookings] = useState();
  console.log(bookings);
  console.log("Before useEffect");

  const [loading, setLoading] = useState(false);

  const search = searchVal => {
    searchVal = searchVal.toLowerCase();
    const filteredSearch = bookings.filter(function(booking) {
      if (
        booking["firstName"].toLowerCase().includes(searchVal) ||
        booking["surname"].toLowerCase().includes(searchVal)
      ) {
        return booking;
      }
    });
    if (filteredSearch.length !== 0) {
      setBookings(filteredSearch);
    }
    // console.log(filteredSearch);
    console.info("TO DO!", searchVal);
  };

  const DelayedFunc = () => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBookings(data);
        setLoading(true);
        // console.log(bookings)
      })
      .catch(error => alert("Refresh The page, something went wrong"));
  };

  useEffect(() => {
    setTimeout(() => DelayedFunc(), 5000);
  }, []);

  return loading ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResult.SearchResults results={bookings} />
      </div>
    </div>
  ) : (
    <div className="delay">
      <span>Data Loading ...</span>
    </div>
  );
};

export default Bookings;

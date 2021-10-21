import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filterSearchResult, setFilterSearchResult] = useState([]);
  console.log(bookings);
  const search = searchVal => {
    if (searchVal === "") {
      setFilterSearchResult(bookings);
    } else {
      const newBooking = bookings.filter(book => {
        return (
          book.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          book.surName.toLowerCase().includes(searchVal.toLowerCase())
        );
      });
      setFilterSearchResult(newBooking);
    }

    console.info("TO DO!", searchVal);
  };
  // console.log(bookings)

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);
  // console.log(bookings);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          results={
            filterSearchResult.length === 0 ? bookings : filterSearchResult
          }
        />
      </div>
    </div>
  );
};

export default Bookings;

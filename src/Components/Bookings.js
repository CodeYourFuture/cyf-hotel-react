import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [countEmptySearches, setCountEmptySearches] = useState(0);
  const search = searchVal => {
    let results = bookings.filter(item => {
      return (
        item.firstName.toLowerCase() == searchVal.toLowerCase() ||
        item.surname.toLowerCase() == searchVal.toLowerCase()
      );
    });
    if (results.length > 0) {
      setBookings(results);
    } else if (searchVal) {
      setBookings([]);
    } else {
      setCountEmptySearches(countEmptySearches + 1);
    }
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(res => {
        setBookings(res);
      });
  }, [countEmptySearches]);

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

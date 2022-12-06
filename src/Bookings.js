import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";

// import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filtered = bookings.filter(
      item =>
        item.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        item.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filtered);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => response.json())
      .then(data => {
        setBookings(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading ? (
          <p>CUSTOMER DATA IS LOADING!</p>
        ) : (
          <SearchResults results={bookings} change />
        )}
      </div>
    </div>
  );
};

export default Bookings;

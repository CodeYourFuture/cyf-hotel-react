import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchedBookings, setSearchedBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = searchVal => {
    const filteredBookings = bookings.filter(booking => {
      const { firstName, surname } = booking;
      return firstName.includes(searchVal) || surname.includes(searchVal);
    });
    setSearchedBookings(filteredBookings);
  };
  useEffect(() => {
    setIsLoading(true);
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => response.json())
      .then(data => {
        setBookings(data);
        setSearchedBookings(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading && (
          <p style={{ backgroundColor: "pink" }}>_loading state_</p>
        )}
        <SearchResults results={searchedBookings} />
      </div>
    </div>
  );
};

export default Bookings;

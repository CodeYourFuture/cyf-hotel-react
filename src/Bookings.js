import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = (searchInput) => {
    const convertedVal = searchInput.toLowerCase().trim();
    const matched = bookings.filter(({ firstName, surname }) => {
      return (
        firstName.toLowerCase().includes(convertedVal) ||
        surname.toLowerCase().includes(convertedVal)
      );
    });
    setBookings(matched);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://cyf-react.glitch.me");
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("The ERROR is:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults data={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

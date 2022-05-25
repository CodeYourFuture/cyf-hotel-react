import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(response => response.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  const search = searchVal => {
    console.info("Restaurant is open", searchVal);

    const newBookings = bookings.filter(
      element =>
        element.firstName.toLowerCase().includes(searchVal.toLowerCase) ||
        element.surname.toLowerCase().includes(searchVal.toLowerCase)
    );
    setBookings(newBookings);
  };
  return (
    <div className="App-content">
      <div className="content">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

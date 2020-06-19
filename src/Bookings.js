import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";


const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = searchVal => {
    const result = bookings.filter((person) => {
      return (person.firstName.toUpperCase() === searchVal.toUpperCase() || person.surname.toUpperCase() === searchVal.toUpperCase())
    })
    setBookings(result)
    console.info("TO DO!", searchVal);
  };
  useEffect(() => {
    fetch(`https://cyf-react.illicitonion.com`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);
  if (!bookings) {
    return null;
  }
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
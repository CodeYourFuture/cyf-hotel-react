import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = props => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, [props.bookings]);
  const search = searchVal => {
    const filterSearch = bookings.filter(
      nameInput =>
        nameInput.firstName.toLowerCase().includes(searchVal) ||
        nameInput.surname.toLowerCase().includes(searchVal)
    );
    setBookings(filterSearch);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

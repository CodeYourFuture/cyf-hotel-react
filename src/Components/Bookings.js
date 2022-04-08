import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filterBookings, setFilterBookings] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setFilterBookings(data);
      });
  }, []);

  const search = searchVal => {
    const filteredBooking = bookings.filter(({ firstName, surname }) => {
      return firstName === searchVal || surname === searchVal;
    });

    if (!filteredBooking.length) {
      setFilterBookings(bookings);
      return;
    }

    setFilterBookings(filteredBooking);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={filterBookings} />
      </div>
    </div>
  );
};

export default Bookings;

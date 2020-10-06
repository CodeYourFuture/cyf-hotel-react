import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeData from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    let filteredBookings = bookings.filter(
      data =>
        data.firstName
          .toLocaleLowerCase()
          .includes(searchVal.toLocaleLowerCase()) ||
        data.surname.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
    );
    setBookings(filteredBookings);
  };

  const [bookings, setBookings] = useState([{}]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(res => res.json())
      .then(data => setBookings(data));
  });

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookingsList={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

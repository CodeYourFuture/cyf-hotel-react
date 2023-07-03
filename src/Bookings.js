import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filterBookings, setFilterBookings] = useState([]); // second state in order to protect OG array

  useEffect(() => {
    console.log("some text, some more text");
    fetch("https://cyf-react.glitch.me")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
        setFilterBookings(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const search = (searchVal) => {
    let searchResult = bookings.filter((booking) => {
      return (
        booking.firstName.toLowerCase().includes(searchVal) ||
        booking.surname.toLowerCase().includes(searchVal)
      );
    });
    setFilterBookings(searchResult);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookingsArray={filterBookings} />
      </div>
    </div>
  );
};

export default Bookings;

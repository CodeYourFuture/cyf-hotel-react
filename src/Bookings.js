import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  let [bookings, setBookings] = useState([]);
  const search = (searchVal) => {
    if (bookings === [] || searchVal === "") return;
    const newGuestLists = bookings.filter((guest) => {
      if (
        guest.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        guest.surname.toLowerCase().includes(searchVal.toLowerCase())
      ) {
        return guest;
      }
    });
    setBookings(newGuestLists);
  };

  const render = () => {
    useEffect(() => {
      fetch("https://cyf-react.glitch.me")
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
        });
    }, []);
  };
  render();

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

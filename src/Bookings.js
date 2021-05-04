import React, { useEffect, useState, useRef } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const allBookings = useRef([]); // to use when searching name or surname

  const search = searchVal => {
    const filteredBookings = allBookings.current.filter(booking => {
      const name = booking.firstName.toLowerCase();
      const lastName = booking.surname.toLowerCase();
      searchVal.toLowerCase();
      return name === searchVal || lastName === searchVal;
    });
    setBookings(filteredBookings);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me").then(response =>
      response.json().then(data => {
        setBookings(data);
        allBookings.current = data;
      })
    );
  }, []);

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

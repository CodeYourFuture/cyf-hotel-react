import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";
import { useEffect } from "react";

const Bookings = () => {
  //console.log(useEffect);
  const search = (searchVal) => {
    const filterBookings = bookings.filter((booking) => {
      return (
        booking.firstName.toLowerCase().includes(searchVal) ||
        booking.surname.toLowerCase().includes(searchVal)
      );
    });
    setBookings(filterBookings);
  };
  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://cyf-react.glitch.me")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setBookings(data);
          setLoading(false);
        }, 4000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;

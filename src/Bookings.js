import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/`)
      .then((response) => {
        if (!response.ok) {
          throw Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBookings(data);
        setLoading(false);
      });
  }, []);

  const search = (searchVal) => {
    const filteredBookings = bookings.filter(
      (booking) =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <div>{loading ? <p>Loading...</p> : null}</div>
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

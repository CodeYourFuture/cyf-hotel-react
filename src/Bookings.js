import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const search = searchVal => {
    const filteredBookings = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(filteredBookings);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
          setIsLoading(false);
          console.log(data.error);
        } else {
          setIsLoading(true);
          setBookings(data);
          console.log(data.error);
        }
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    bookings.length > 0 ? (
      <div className="App-content">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    ) : (
      <div className="App-content">
        <h1>Loading...</h1>
      </div>
    )
  ) : (
    <div className="App-content">
      <h1>Error</h1>
      <p>{error}</p>
    </div>
  );
};

export default Bookings;

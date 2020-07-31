import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      // fetch("https://cyf-react.glitch.me/delayed")
      // fetch("https://cyf-react.glitch.me/error")
      .then(response => {
        if (!response.ok) {
          setIsError(true);
        } else {
          return response.json();
        }
      })
      .then(data => {
        setBookings(data);
        setIsLoading(false);
      });
  }, []);

  const search = searchVal => {
    // console.info("TO DO!", searchVal);

    let filteredBookings = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(filteredBookings);
  };

  return isError ? (
    <div>There was an error while fetching the data</div>
  ) : isLoading ? (
    <div>Loading, please wait...</div>
  ) : (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

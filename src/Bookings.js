import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(
        data => {
          console.log(data);
          setIsLoaded(true);
          setBookings(data);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const selectedBooking = bookings.filter(
      item =>
        item.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        item.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(selectedBooking);
  };

  if (error) {
    console.log(error);
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center text-primary m-5">
        <div className="spinner-border" role="status" />
      </div>
    );
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      </div>
    );
  }
};

export default Bookings;

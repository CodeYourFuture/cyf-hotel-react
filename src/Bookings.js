import React, { useState, useEffect } from "react";
import Search from "./Search";
import { SearchResults, BookingForm } from "./components";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const whereFirstNameOrSurnameMatches = searchVal => booking =>
    booking.firstName.toLowerCase().includes(searchVal) ||
    booking.surname.toLowerCase().includes(searchVal);

  const filteredBookings = bookings.filter(
    whereFirstNameOrSurnameMatches(searchInput.toLowerCase())
  );

  useEffect(() => {
    fetch(`https://cyf-react.illicitonion.com/`)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          throw new Error("HTTP error");
        }
      })
      .then(data => {
        setIsLoading(true);
        setBookings(data);
      })
      .catch(err => {
        setIsLoading(true);
        setError(err);
      });
  }, []);
  if (!isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Can not fetch booking data the following error has occurred:
        <a href="/#" className="alert-link">
          {error.toString()}
        </a>
      </div>
    );
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <Search searchInput={searchInput} setSearchInput={setSearchInput} />
          <SearchResults customerBookings={filteredBookings} />
          <BookingForm />
        </div>
      </div>
    );
  }
};

export default Bookings;

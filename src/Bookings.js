import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import AddBooking from "./AddBooking";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setBookings(null);
    fetch("https://cyf-react.glitch.me/")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  if (error) {
    return (
      <div className="font-weight-bolder text-danger ">
        {" "}
        something wrong {error.message}{" "}
      </div>
    );
  } else if (!bookings) {
    return (
      <div className="alert alert-warning font-weight-bold"> "Loading..." </div>
    );
  }

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        booking =>
          booking.firstName.toLowerCase() === searchVal ||
          booking.surname.toLowerCase() === searchVal
      )
    );
  };
  function handlarAddBooking(value) {
    const newBookings = [...bookings, value];
    setBookings(newBookings);
  }
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        <AddBooking handlarAddBooking={handlarAddBooking} />
      </div>
    </div>
  );
};

export default Bookings;

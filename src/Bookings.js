import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import { useState, useEffect } from "react";
import AddNewBooking from "./AddNewBooking";
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let searchResults = bookings.filter(
      booking =>
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
    );

    setBookings(searchResults);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })

      .then(data => {
        setBookings(data);
        setIsLoaded(true);
      })
      .catch(() => {
        setError(true);
      });
  }, []);
  let addBooking = newBooking => {
    newBooking["id"] = bookings.length + 1;
    setBookings(bookings.concat(newBooking));
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoaded ? (
          <SearchResults BookingsResults={bookings} />
        ) : error ? (
          <strong>sorry but there was an error loading data!!</strong>
        ) : (
          <strong>Loading Data please wait...</strong>
        )}

        <AddNewBooking addBooking={addBooking} />
      </div>
    </div>
  );
};

export default Bookings;

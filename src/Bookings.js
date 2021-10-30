import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState(bookings);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          setBookings(data);
          setFilteredBookings(data);
          setLoading(true);
        } else {
          setHasError(true);
          setLoading(false);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const search = searchVal => {
    let result = bookings.filter(element => {
      return (
        element.firstName.toLowerCase().includes(searchVal) ||
        element.surname.toLowerCase().includes(searchVal)
      );
    });
    setFilteredBookings(result);
  };

  return (
    <div className="App-content">
      <div className="table-small-display">
        <Search search={search} />
        {hasError ? (
          <span>Something went wrong!</span>
        ) : loading ? (
          <SearchResults result={filteredBookings} />
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
};

export default Bookings;

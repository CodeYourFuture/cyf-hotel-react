import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults/SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => {
        // If the response status is 500 and throws an error
        if (res.status === 500) {
          throw new Error(res.status);
        } else {
          return res.json();
        }
      })
      .then(data => {
        setBookings(data);
        setLoading(false); //Sets the loading state to false, so that the SearchResults component can be rendered
      })
      // Set the error state to true if any
      .catch(error => setError(true));
  }, []);

  // Displays a single guest name according to the name or surname provided from the search
  const search = searchVal => {
    setBookings(
      bookings.filter(guest => {
        return guest.firstName === searchVal || guest.surname === searchVal;
      })
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!loading ? (
          <SearchResults results={bookings} />
        ) : !error ? (
          <p className="loading">Loading..... Please Wait</p>
        ) : (
          <p className="error">Error..... Content not found</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });

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
    const fetchData = async () => {
      setIsLoading(true);
      setError({ status: false, message: "" });
      let result = [];

      try {
        const response = await fetch("https://cyf-react.glitch.me/");

        if (!response.ok) {
          const { error } = await response.json();
          throw error;
        }

        result = await response.json();

        setIsLoading(false);
      } catch (err) {
        setError({ status: true, message: err });
      }

      setBookings(result);
    };

    fetchData();
  }, []);

  if (!isLoading && !error.status) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {error.status ? (
          <p>{error.message}</p>
        ) : (
          <p>Please wait. The booking data is being loaded.</p>
        )}
      </div>
    );
  }
};

export default Bookings;

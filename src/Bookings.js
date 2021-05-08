import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    const searchedPerson = bookings.filter(
      person =>
        person.firstName.toLowerCase() === searchVal.toLowerCase() ||
        person.surname.toLowerCase() === searchVal.toLowerCase()
    );

    setBookings(searchedPerson);
  };

  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(response => {
        if (response.status >= 400) {
          throw new Error(
            `Encountered something unexpected: ${response.status}`
          );
        }
        return response.json();
      })
      .then(
        data => {
          setBookings(data);
          setLoading(false);
        },
        error => {
          setError(error);
          setLoading(false);
        }
      );
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default Bookings;

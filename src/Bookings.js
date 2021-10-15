import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed").then(response => {
      if (response.ok) {
        response.json
          .then(data => {
            setLoading(true);
            setBookings(bookings => data);
          })
          .catch();
      } else {
        setError(true);
      }
    });
  }, []);

  const search = searchVal => {
    console.info(searchVal);
    if (searchVal !== "") {
      setBookings(
        bookings.filter(
          element =>
            searchVal.toLower() == element.firstName.toLowerCase() ||
            searchVal.toLower() == element.surname.toLowerCase()
        )
      );
    } else {
      setBookings(bookings);
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;

import React, { useEffect, useState } from "react";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";
import Loader from "./Loader.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const search = searchVal => {
    setBookings(
      bookings.filter(
        element =>
          element.firstName.toLowerCase() === searchVal.toLowerCase() ||
          element.surname.toLowerCase() === searchVal.toLowerCase()
      )
    );
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        setLoading(true);
        setError(true);
        setBookings(data);
      });
  }, []);

  if (bookings.error) {
    return error && <p>HTTP Error 500!</p>;
  }

  return loading ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Bookings;

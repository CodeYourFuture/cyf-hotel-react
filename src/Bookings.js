import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState(bookings);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const search = searchVal => {
    setBookings(
      filteredBookings.filter(
        ({ firstName, surname }) =>
          firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        if (data.error) setError(data.error);
        setLoading(false);
        setBookings(data);
        setFilteredBookings(data);
      });
  }, []);

  if (error) return <h4 className="alert alert-warning">{error}</h4>;

  return (
    <div className="App-content">
      <div>
        {loading && (
          <h4 className="alert alert-warning">Loading please wait...</h4>
        )}
        {!loading && (
          <>
            <Search search={search} />
            <SearchResults results={bookings} />
          </>
        )}
      </div>
    </div>
  );
};

export default Bookings;

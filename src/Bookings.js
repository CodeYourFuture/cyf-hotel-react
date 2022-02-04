import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState([]);

  const search = searchVal => {
    const filterBooking = bookings.filter(item => {
      if (searchVal) {
        return (
          item.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          item.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
      } else {
        return item;
      }
    });
    setBookings(filterBooking);
    setSearchTerm(searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(Response => {
        if (!Response.ok) {
          throw Error("Data not available.....please try later.");
        }
        return Response.json();
      })
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [searchTerm]);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {error && <p>{error}</p>}
        {!loading ? (
          <SearchResults results={bookings} />
        ) : (
          <p>Loading.....Please wait</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;

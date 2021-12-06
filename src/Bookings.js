import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw Error(`${res.status} Internal Server error`);
      })
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  const search = searchVal => {
    if (searchVal.length !== 0) {
      let matchingGuests = bookings.filter(element => {
        return (
          element.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          element.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
      });
      setBookings(matchingGuests);
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {error && <div>{error}</div>}
        {loading && <div>Loading....</div>}
        {bookings && <SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;

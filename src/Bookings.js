import React, { useState, useEffect, useCallback } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    setBookings(
      bookings.filter(
        booking =>
          booking.firstName === searchVal || booking.surname === searchVal
      )
    );
  };

  const [bookings, setBookings] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      //fetch('https://cyf-react.glitch.me/error')
      .then(res => {
        if (!res.ok) {
          throw Error("Could not fetch data from that resource!!");
        }
        return res.json();
      })
      .then(data => {
        setLoading(true);
        setDeleteLoading(null);
      })
      .catch(err => {
        setError(err.message);
        setDeleteLoading([].pop());
      });
  });

  return isLoading ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  ) : (
    <div>
      {deleteLoading && (
        <p className="text-success">Booking table is loading ...</p>
      )}
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default Bookings;

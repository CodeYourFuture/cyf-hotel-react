import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        customer =>
          customer.surname.toLowerCase().includes(searchVal) ||
          customer.firstName.toLowerCase().includes(searchVal)
      )
    );
  };
  const [bookings, setBookings] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then(data => {
        setBookings(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {error && <span>{error}</span>}
        {isPending && <span> Loading...</span>}
        {bookings && <SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;

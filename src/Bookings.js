import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
//import Profile from "./Profile.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const filtering = bookings.filter(item => {
      return (
        item.firstName.toLowerCase() === searchVal.toLowerCase() ||
        item.surname.toLowerCase() === searchVal.toLowerCase()
      );
    });
    setBookings(filtering);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setBookings(data);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings ? (
          <SearchResults data={bookings} color="white" />
        ) : (
          <div>Page Loading..</div>
        )}
      </div>
    </div>
  );
};

export default Bookings;

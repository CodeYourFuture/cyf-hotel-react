import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    setBookings(
      bookings.filter(
        person => person.name === searchVal || person.surname === searchVal
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings.length > 0 ? (
          <SearchResults results={bookings} />
        ) : (
          "LOADING..."
        )}
      </div>
    </div>
  );
};

export default Bookings;

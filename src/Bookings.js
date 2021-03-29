import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setTimeout(function() {
      fetch("https://cyf-react.glitch.me")
        .then(response => response.json())
        .then(data => setBookings(bookings => data))
        .catch(error => console.log(error));
    }, 1000);
  }, []);

  const search = searchVal => {
    console.info(searchVal);
    if (searchVal !== "") {
      setBookings(
        bookings.filter(
          el =>
            searchVal.toLowerCase() === el.firstName.toLowerCase() ||
            searchVal.toLowerCase() === el.surname.toLowerCase()
        )
      );
    } else {
      return <SearchResults allBookings={bookings} />;
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults allBookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

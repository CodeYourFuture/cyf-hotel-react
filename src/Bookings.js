import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.illicitonion.com/")
      // fetch("https://cyf-react.glitch.me/error")
      .then(res => res.json())
      .then(data => setBookings(data));
    // .catch((error) => setError(error))
  }, []);

  const search = searchVal => {
    setBookings(
      bookings.filter(
        book =>
          book.firstName.toLowerCase() === searchVal.toLowerCase() ||
          book.surname.toLowerCase() === searchVal.toLowerCase()
      )
    );
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      {/* {error ? (
        <p>{error}</p>
      ) : ( */}
      <div className="container">
        <Search search={search} />
        {bookings.length === 0 ? (
          "Loading..."
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
      )
    </div>
  );
};

export default Bookings;

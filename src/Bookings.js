import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);
  const search = searchVal => {
    setBookings(
      bookings.filter(
        name =>
          name.firstName.toLowerCase() === searchVal.toLowerCase() ||
          name.surname.toLowerCase() === searchVal.toLowerCase()
      )
    );
    console.info("TO DO!", searchVal);
  };
  return (
    <div className="App-content">
      <div className="container">
        {!bookings.length && <h1> Loading </h1>}
        {bookings.error ? (
          <h1> error:Whoops something went wrong! </h1>
        ) : (
          <>
            <Search search={search} />
            <SearchResults searchResults={bookings} />
          </>
        )}
      </div>
    </div>
  );
};

export default Bookings;

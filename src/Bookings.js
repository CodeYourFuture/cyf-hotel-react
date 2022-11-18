import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        el => el.firstName === searchVal || el.surname === searchVal
      )
    );
  };

  useEffect(() => {
    console.log("Fetching data...");

    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  return (
    <div>
      {bookings ? (
        <div className="App-content">
          <div className="container">
            <Search search={search} />
            <SearchResults results={bookings} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Bookings;

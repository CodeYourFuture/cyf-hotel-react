import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import { useState, useEffect } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredResults = bookings.filter(item => {
      if (
        item.firstName.includes(searchVal) ||
        item.surname.includes(searchVal)
      ) {
        return true;
      } else {
        return false;
      }
    });
    setBookings(() => {
      return filteredResults;
    });
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(res => res.json())
      .then(data => {
        console.log("done");
        setBookings(() => {
          return data;
        });
      });
  }, []);

  return bookings ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  ) : (
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Bookings;

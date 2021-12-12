import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  // eslint-disable-next-line
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setBookings(data);
      })
      .catch(error => {
        console.log(`ERROR = ${error}`);
      });
  });

  let displayedResults = bookings;
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    displayedResults.filter(candidate => {
      const formattedFN = candidate.firstName.toLowerCase();
      const formattedSN = candidate.surname.toLowerCase();
      if (searchVal === "") {
        return candidate;
      } else {
        if (
          formattedFN.includes(searchVal.toLowerCase()) ||
          formattedSN.includes(searchVal.toLowerCase())
        ) {
          return candidate;
        }
      }
    });
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={displayedResults} />
      </div>
    </div>
  );
};

export default Bookings;

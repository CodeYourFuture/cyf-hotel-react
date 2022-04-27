import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  //for the table
  const [bookings, setBookings] = useState([]);
  //return filtered search with data
  const [filteredResult, setFilteredResult] = useState(bookings);

  //setting a 5 second delay before displaying the table
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setFilteredResult(data);
        setIsLoading(false);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    if (searchVal === "") {
      //resetting the table to render all results
      setFilteredResult(bookings);
    } else {
      const filtered = bookings.filter(({ firstName, surname }) => {
        if (firstName === searchVal || surname === searchVal) {
          return true;
        } else {
          return false;
        }
      });

      return setFilteredResult(filtered);
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        {isLoading ? (
          "Loading...Please Wait!"
        ) : (
          <>
            <Search search={search} />
          </>
        )}
        <SearchResults results={filteredResult} />
      </div>
    </div>
  );
};

export default Bookings;

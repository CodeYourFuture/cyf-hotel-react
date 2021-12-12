import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  // eslint-disable-next-line
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        return response.json();
      })
      .then(data => {
        // this creates a backup as well as
        // setting the data up as standard
        // allowing the search function to work
        setBookings(data);
        setFilteredBookings(data);
      })
      .catch(error => {
        console.log(`ERROR = ${error}`);
      });
  }, []);
  const searchFilter = searchVal => {
    // reset the value to the backup with each new search
    setFilteredBookings(bookings);
    // if there is a value in the search
    // then apply the filter
    // else ensure that it returns the full data set
    if (searchVal.length > 0) {
      setFilteredBookings(
        filteredBookings.filter(candidate => {
          // formatted to lowercase to avoid case sensitivity
          const formSrch = searchVal.toLowerCase();
          const formFN = candidate.firstName.toLowerCase();
          const formSN = candidate.surname.toLowerCase();
          return formFN.includes(formSrch) || formSN.includes(formSrch);
        })
      );
    } else {
      // return full data set backup
      setFilteredBookings(bookings);
      return filteredBookings;
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={searchFilter} />
        <SearchResults results={filteredBookings} />
      </div>
    </div>
  );
};

export default Bookings;

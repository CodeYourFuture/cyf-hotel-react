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
        setBookings(data);
        setFilteredBookings(data);
      })
      .catch(error => {
        console.log(`ERROR = ${error}`);
      });
  }, []);
  const searchFilter = searchVal => {
    setFilteredBookings(bookings);
    console.log(searchVal);
    if (searchVal.length > 0) {
      setFilteredBookings(
        filteredBookings.filter(candidate => {
          const formSrch = searchVal.toLowerCase();
          const formFN = candidate.firstName.toLowerCase();
          const formSN = candidate.surname.toLowerCase();
          return formFN.includes(formSrch) || formSN.includes(formSrch);
        })
      );
    } else {
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

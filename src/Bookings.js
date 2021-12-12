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
  }, []);
  let filteredResults = bookings;
  const searchFilter = searchVal => {
    console.log(searchVal);
    console.log(filteredResults);
    if (searchVal !== "" || searchVal !== null) {
      setBookings(
        filteredResults.filter(candidate => {
          const formSrch = searchVal.toLowerCase();
          const formFN = candidate.firstName.toLowerCase();
          const formSN = candidate.surname.toLowerCase();
          return formFN.includes(formSrch) || formSN.includes(formSrch);
        })
      );
    } else {
      filteredResults = bookings;
      return filteredResults;
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={searchFilter} />
        <SearchResults results={filteredResults} />
      </div>
    </div>
  );
};

export default Bookings;

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

// Renders bookings container (eventually will perform a search), called by `App.js`.
const Bookings = () => {
  const [bookings, setBookings] = useState(null);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [status, setStatus] = useState(false);

  // Fetch and convert data to a usable format with error/status checking.
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      // fetch("https://cyf-react.glitch.me/error") // Left in for debug
      .then(response =>
        response.status >= 200 && response.status <= 299
          ? response.json()
          : setStatus(response.status)
      )
      .then(data => {
        setBookings(data);
        setDataFetched(true);
      })
      .catch(error => console.log(`Error received: ${error}`));
  }, []);

  // Filter booking data and set the results to state variable `filteredBookings`, called by `SearchResults`
  const search = searchVal => {
    if (searchVal === "") {
      setFilteredBookings(bookings);
    } else {
      let bookingMatches = bookings.filter(booking => {
        return (
          booking.firstName.toUpperCase().includes(searchVal.toUpperCase()) ||
          booking.surname.toUpperCase().includes(searchVal.toUpperCase())
        );
      });
      setFilteredBookings(bookingMatches);
    }
  };

  // Render bookings table if fetch completed and bookings contains data. Sends either `bookings` state variable
  // or the `filteredBookings` state variable depending on whether there has been a search and `filteredBookings` contains elements.
  return (
    <div>
      {dataFetched && !status ? (
        <div className="Bookings-content">
          <div className="container">
            <Search search={search} />
            <SearchResults
              results={!filteredBookings.length ? bookings : filteredBookings}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-center m-5">
            <span className="spinner-border text-primary" role="status" />
            <div className="px-3">
              {" "}
              {status ? `Error Loading: ${status}` : "Loading..."}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;

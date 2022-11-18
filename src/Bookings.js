import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Fetching data from Bookings");
    fetch(` https://cyf-react.glitch.me`)
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error(
            `Encountered something unexpected: ${response.status} ${
              response.statusText
            }`
          );
        }
      })
      .then(data => {
        // data.error ? setStatus("loading failed") :
        setBookings(data);
        setLoading(true);
      })
      .catch(error => {
        // Handle the error
        console.log(error);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);

    let filteredBookings = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
      );
    });
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        {loading === "fetching" && "Loading Please wait..."}
        {loading === true && (
          <>
            <Search search={search} />
            <SearchResults results={bookings} />
          </>
        )}
        {loading === false && "Sorry, loading failed!"}
      </div>
    </div>
  );
};

export default Bookings;

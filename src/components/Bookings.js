import React, { useState, useEffect } from "react";
import Search from "./bookings/Search.js";
import SearchResults from "./bookings/SearchResults.js";

const Bookings = () => {
  const search = searchVal => {
    const newBookings = bookings;
    let filteredBooking = newBookings.filter(
      client =>
        client.firstName.toUpperCase() === searchVal.toUpperCase() ||
        client.surname.toUpperCase() === searchVal.toUpperCase()
    );
    setBookings(filteredBooking);
  };

  console.log("component loaded");
  const [error, setError] = useState(null);

  const [state, setState] = useState({
    status: "loading",
    bookings: null,
    error: null
  });

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(
        response => response.json(),
        () => {
          console.log("reached here");
          return {
            status: "loading",
            bookings: null,
            error: "Error while Loading API..."
          };
        }
      )
      .then(
        result => {
          setState({
            status: "complete",
            bookings: result,
            error: result.error
          });
        }
      );
  }, []);

  if (state.error) {
    return (
      <div>
        <h1>{state.error}</h1>
      </div>
    );
  } else if (state.status === "loading") {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <br />
          <SearchResults bookings={state.bookings} />
        </div>
      </div>
    );
  }
};

export default Bookings;

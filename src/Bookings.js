import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed").then(response => {
      if (response.ok) {
        response
          .json()
          .then(data => {
            setLoading(true);
            setBookings(bookings => data);
          })
          .catch();
      } else {
        setError(true);
      }
    });
  }, []);

  // filter function

  const search = searchVal => {
    console.info(searchVal);
    if (searchVal !== "") {
      setBookings(
        bookings.filter(
          el =>
            searchVal.toLowerCase() === el.firstName.toLowerCase() ||
            searchVal.toLowerCase() === el.surname.toLowerCase()
        )
      );
    } else {
      setBookings(bookings);
    }
  };

  // conditional rendering

  if (error && loading === false) {
    return <h3>Whoops Something went wrong</h3>;
  } else if (loading) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults allBookings={bookings} />
        </div>
      </div>
    );
  } else if (loading === false) {
    return <h3>Loading.............</h3>;
  }
};

export default Bookings;

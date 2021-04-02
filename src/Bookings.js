import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => response.json())
      .then(data => {
        setError(true);
        setLoading(true);
        setBookings(bookings => data);
      })
      .catch(() => setError(true));
  }, []);

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

  if (loading) {
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
  } else {
    return <p>An error occurred while fetching data</p>;
  }

  /* return (
    <div className="App-content">
      <div className="container">
        {loading ? (
          <div>
            <Search search={search} />
            <SearchResults allBookings={bookings} />
          </div>
        ) : (
          <h3>Loading.............</h3>
        )}
       
      </div>
    </div>
  ); */
};

export default Bookings;

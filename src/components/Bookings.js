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
    setBookings(filteredBooking)
  };

  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react-glitch.me")
    .then(response => response.json())
    .then(
      result => {
        setLoaded(true);
        setBookings(result)
      },

      error => {
        setLoaded(true);
        setError(error)
      }
    );
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!loaded) {
    return <div>Loading, Please wait a moment...</div>
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults bookings={bookings}/>
        </div>
      </div>
    );
  }
}

export default Bookings;

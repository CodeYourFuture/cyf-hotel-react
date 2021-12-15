import React, { useState,useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [dataIsFetched, setDataIsFetched] = useState(false);
  
  const search = searchVal => {
    setBookings(
      bookings.filter(
        booking =>
          booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
          booking.surname.toLowerCase() === searchVal.toLowerCase()
      )
    );
    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
    .then(response => {
      if (!response.ok === true) {
        throw new Error("fetching failed");
      }
      return response.json();
    })
     .then(data => {
      setBookings(data);
      setDataIsFetched(true);
      setIsLoaded(true);
    })
      .catch(error => {
        setErrorMessage(error);
      });
  }, []);

  if (dataIsFetched === true) {
    if (isLoaded === true) {
      return (
        <div className="App-content">
          <div className="container">
            <Search search={search} />

            <SearchResults results={bookings} />
          </div>
        </div>
      );
    } else {
      return <h1>Loading bookings....</h1>;
    }
  } else {
    return <div className="container">{errorMessage}</div>;
}
};

export default Bookings;

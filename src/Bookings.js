import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

/*

*/

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        booking =>
          booking.firstName.toUpperCase() === searchVal.toUpperCase() ||
          booking.surname.toUpperCase() === searchVal.toUpperCase()
      )
    );
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => {
        if (response.ok) {
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
        setBookings(data);
        setIsLoading(true);
      })
      .catch(error =>
        console.error("There has been a problem with fetch operation:", error)
      );
  }, []);

  return (
    <div className="container">
      <Search search={search} />
      {isLoading ? (
        <SearchResults results={bookings} />
      ) : (
        <p>Please wait, the booking details is loading.....</p>
      )}
    </div>
  );
};

export default Bookings;

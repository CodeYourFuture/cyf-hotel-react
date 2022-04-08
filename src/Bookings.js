import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const search = searchVal => {
    let filteredData = allBookings.filter(
      booking =>
        booking.firstName.includes(searchVal) ||
        booking.surname.includes(searchVal)
    );
    setBookings(filteredData);
  };
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => {
        if (!res.ok) {
          throw Error("Error detected!");
        }
        return res.json();
      })
      .then(data => {
        setBookings(data);
        setAllBookings(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);
  // if (!bookings) setBookings({ FakeBookings });
  return (
    <div className="App-content">
      <div className="container">
        {!error ? (
          isLoading ? (
            <div> Data is Loading ...</div>
          ) : (
            <>
              {" "}
              <Search search={search} />
              <SearchResults results={bookings} />
            </>
          )
        ) : (
          error && <p>{error}</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;

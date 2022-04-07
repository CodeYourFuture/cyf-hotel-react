import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const search = (searchVal) => {
    setBookings(
      bookings.filter((booking) => {
        return booking.firstName === searchVal || booking.surname === searchVal;
      })
    );
  };

  useEffect(() => {
    console.log("Hello to Travelers' World!");

    fetch("https://cyf-react.glitch.me")
      .then((res) => {
        if (res.status === 500) {
          throw new Error(res.status);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((error) => setError(true));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!loading ? (
          <SearchResults results={bookings} />
        ) : !error ? (
          <p className="loadingMessage">
            {" "}
            Booking details are loading please wait...
          </p>
        ) : (
          <p className="errorMessage"> Upss...something went wrong!</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;

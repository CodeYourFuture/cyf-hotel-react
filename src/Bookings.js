import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import Loader from "react-loader-spinner";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(bookings);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => {
        if (!res.ok) {
          throw Error("Apologies! There was and error fetching the data");
        }
        return res.json();
      })
      .then(data => {
        console.log(data);

        setBookings(data);
        setLoading(false);
        setError(null);
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const search = searchVal => {
    const searchInputAreaValue = searchVal.toUpperCase();
    let filteredDataArr = bookings.filter(booking => {
      if (
        booking.firstName.toUpperCase() === searchInputAreaValue ||
        booking.surname.toUpperCase() === searchInputAreaValue
      ) {
        return booking;
      }
    });
    setBookings(filteredDataArr);
  };

  return (
    <div className="App-content">
      {bookings && (
        <div className="container">
          <Search search={search} />
          {<SearchResults results={bookings} />}
        </div>
      )}
      {loading && (
        <div className="loading bg-secondary">
          <Loader type="Circles" color="blue" height={100} width={100} />
          <em>Thank you for waiting results will be loaded soon ...</em>
        </div>
      )}

      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default Bookings;

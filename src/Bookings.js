import React, { useEffect, useState } from "react";
import Loader from "./Loader.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        el =>
          el.firstName.toLowerCase() === searchVal.toLowerCase() ||
          el.surname.toLowerCase() === searchVal.toLowerCase()
      )
    );
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setLoading(true);
        setError(true);
        setBookings(data);
      });
  }, []);

  if (bookings.error) {
    return error && <p className="httpError">HTTP Error 500...</p>;
  }

  return loading ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Bookings;

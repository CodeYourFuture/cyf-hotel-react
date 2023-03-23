import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://cyf-react.glitch.me`)
      .then((res) => {
        if (res.status === 200) {
          console.log("Status we get back", res.status);
          // we want to pass this data on parsed using the json method
          return res.json();
        }
        if (res.status === 500) {
          console.log("Status we get back", res.status);
          // we want to cancel out of this and set the Error
          setLoading(false);
          throw setError("this api sucks");
        }
      })
      .then((data) => {
        // console.log("data", data);
        setLoading(false);
        setError(false);
        setBookings(data);
      })
      .catch((error) => {
        console.log("3wq ZV");
      });
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    setBookings((prev) =>
      prev.filter(
        (item) =>
          item.firstName.toLowerCase() === searchVal ||
          item.surname.toLowerCase() === searchVal
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading && <div>Loading...</div>}
        {!loading && !error && bookings && <SearchResults results={bookings} />}
        {error && <div>Error: {error}</div>}
      </div>
    </div>
  );
};

export default Bookings;

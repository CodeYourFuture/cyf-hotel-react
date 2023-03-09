import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";
import { useEffect } from "react";

const Bookings = () => {
  //console.log(useEffect);
  const search = (searchVal) => {
    const filterBookings = bookings.filter((booking) => {
      return (
        booking.firstName.toLowerCase().includes(searchVal) ||
        booking.surname.toLowerCase().includes(searchVal)
      );
    });
    setBookings(filterBookings);
  };
  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch("https://cyf-react.glitch.me")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`http error! Status code: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          setBookings(data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setError("Error!");
        setLoading(false);
      });
  }, []);

  console.log(error);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings ? <SearchResults results={bookings} /> : null}
        {loading ? <p>Loading data...</p> : null}
        {error ? <p>{error}</p> : null}
      </div>
    </div>
  );
};

export default Bookings;

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import "./Bookings.css";
import NewBooking from "./NewBooking";
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(bookings);

  useEffect(() => {
    // fetch(`https://cyf-react.glitch.me`)
    setLoading(true);
    fetch(`https://cyf-react.glitch.me/delayed`)
      // fetch("https://cyf-react.glitch.me/error")
      .then(res => {
        if (!res.ok) {
          setError(true);
        } else {
          return res.json();
        }
      })
      .then(data => {
        console.log(data);
        setBookings(data);
        setLoading(false);
      });
    //   .catch((error) => setError(error));
    // console.log("500 HTTP Error");
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    let user = bookings.filter(
      name =>
        name.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        name.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(user);
  };

  return error ? (
    <div className="center"> Sorry....request not found</div>
  ) : loading ? (
    <div className="center"> Loading ... Please wait</div>
  ) : (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings.length !== 0 && <SearchResults results={bookings} />}
      </div>
      <NewBooking />
    </div>
  );
};

export default Bookings;

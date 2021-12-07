import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import "./App.css";
const Data = [
  "Button",
  "id",
  "title",
  "first name",
  "sure name",
  "email",
  "room id",
  "check in date",
  "check out date",
  "number of nights",
  "customer's profile"
];

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [err, setErr] = useState(false);
  useEffect(() => {
    console.log("Working !");
    fetch("https://cyf-react.glitch.me/delayed")
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
        throw Error("Can not load the data");
      })
      .then(data => {
        setLoaded(true);
        setBookings(data);
      })

      .catch(function(err) {
        console.log(err.message);
        setErr(true);
      });
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    console.log(bookings);
    console.log(searchVal);
    if (searchVal === "") {
      return setBookings(bookings);
    } else {
      setBookings(
        bookings.filter(
          booking =>
            booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
            booking.surname.toLowerCase().includes(searchVal.toLowerCase())
        )
      );
      console.log(bookings);
    }
  };

  return !err ? (
    loaded ? (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <h1>Bookings</h1>
          <SearchResults table={Data} results={bookings} />
        </div>
      </div>
    ) : (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <h1>Bookings</h1>
          <h2>Loading The Data...</h2>
        </div>
      </div>
    )
  ) : (
    <h1 className="error">Can not load the data</h1>
  );
};

export default Bookings;

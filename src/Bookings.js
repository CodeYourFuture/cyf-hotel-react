import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import AddBookings from "./AddBookings";
import "./App.css";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const URL = "https://cyf-react.glitch.me/";
  const [error, setError] = useState(null);

  useEffect(() => {
    setBookings(null);
    fetch(URL)
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => setError(error));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal + "" + searchVal.length);
    setBookings(
      bookings.filter(
        el =>
          el.firstName.toLowerCase() === searchVal ||
          el.surname.toLowerCase() === searchVal
      )
    );
  };

  const addNewAccount = newAcc => {
    setBookings([...bookings, newAcc]);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {error ? (
          <div className="text-danger" style={{ fontSize: 25 }}>
            Something went wrong: {error.message}
          </div>
        ) : bookings ? (
          <SearchResults results={bookings} />
        ) : (
          <button className="buttonload">
            <i class="fa fa-refresh fa-spin" />Loading
          </button>
        )}

        <AddBookings addNewAccount={addNewAccount} />
      </div>
    </div>
  );
};

export default Bookings;

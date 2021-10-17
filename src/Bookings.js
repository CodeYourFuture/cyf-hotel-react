import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const search = e => {
    let firstName = bookings.filter(item => {
      return item.firstName.toLowerCase().includes(e.toLowerCase());
    });
    setLoading(firstName);
  };
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setLoading(data);
        setBookings(data);
      })
      .catch(error => {
        setError(true);
      });
  }, []);

  // const search = (searchVal) => {
  //  console.info(searchVal);
  // if (bookings && error && loading === false) {
  if (true) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={loading} />
        </div>
      </div>
    );
  }
};

export default Bookings;

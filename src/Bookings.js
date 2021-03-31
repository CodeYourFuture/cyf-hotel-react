import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";

const Bookings = () => {
  const search = e => {
    let firstName = bookings.filter(
      item =>
        item.firstName.toLowerCase().includes(e.toLowerCase()) ||
        item.surname.toLowerCase().includes(e.toLowerCase())
    );
    setResult(firstName);
  };

  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setBookings(data);
        setResult(data);
      })
      .catch(error => {
        setError(true);
      });
  }, []);

  if (bookings && result && error === false) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={result} />
        </div>
      </div>
    );
  } else {
    return <strong>Cannot Fetch Data!</strong>;
  }
};

export default Bookings;

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw Error(`${response.status} Server error`);
      })
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const search = input => {
    if (input.length !== 0) {
      let filtered = bookings.filter(element => {
        return (
          element.firstName.toLowerCase().includes(input.toLowerCase()) ||
          element.surname.toLowerCase().includes(input.toLowerCase())
        );
      });
      setBookings(filtered);
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        {loading ? <h4 className="loadingData">Loading ...</h4> : ""}
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

import React, { useState,  useEffect } from 'react';
import Search from "./Search";
import SearchResults from "./SearchResults";


const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

 useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        setBookings(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

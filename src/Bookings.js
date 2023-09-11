import React, { useState,  useEffect } from 'react';
import Search from "./Search";
import SearchResults from "./SearchResults";


const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  const search = searchVal => {
    const filtered = bookings.filter((booking) => {
      const { firstName, surname } = booking;
      return (
        firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });

    setFilteredBookings(filtered);
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

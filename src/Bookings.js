import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const search = (searchVal) => {
        console.log(searchVal);
     const filteredBookings = bookings.filter(
 
      (booking) =>
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
    );
    setBookings(filteredBookings);
  };

  useEffect(() => {
      setIsLoading(true);
    fetch("https://cyf-react.glitch.me/delayed")
 
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
         setIsLoading(false);  
 
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading ? (
          <p>Loading... Please wait.</p>
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;

import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  const filterBookings = searchVal => {
    const filteredBookings = bookings.filter(
    booking => booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) || 
    booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings)
  };
const [bookings, setBookings]=useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
  
useEffect(()=> {
  setIsLoading(true);
  setError(null);
  // console.log("Hello from CYF Hotel React");

  fetch(
    'https://cyf-react.glitch.me/error'
  )
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  })
  .then(data => {
 setBookings(data);
 setIsLoading(false);
  })
    .catch(error => {
      setError("Error loading bookings data.");
      setIsLoading(false);
      console.log(error);
    });
}, []);


return (
    <div className="bookings">
      <h2>Bookings</h2>
    {/* <Search searchQuery={search}/> */}
    {isLoading ? (
    <p>Loading...</p>
    ) : error ? (
      <p>{error}</p>
    ) : (
  <SearchResults  results={bookings} /> 
    )}    
      </div>
  
  );
};

export default Bookings;

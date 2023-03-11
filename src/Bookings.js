import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
 
  const [bookings, setBookings] = useState([]);

useEffect(() => {
  console.log('Done')
  fetch("https://cyf-react.glitch.me")
  // .then ((res) => res.json())
  .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
  .then ((bookings) => {
    setBookings(bookings)
  })
  .catch(error => {
      console.error('Error fetching data:', error);
    });
},[])


  // const search = searchVal => {
  //   console.info("TO DO!", searchVal);
  // };

  const search = (searchVal) => {
    const filteredBookings = bookings.filter(
      (booking) =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
  };


  return (
    
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;


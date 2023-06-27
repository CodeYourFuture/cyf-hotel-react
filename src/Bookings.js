import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.jsx";
//import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, []);
  /* https://www.youtube.com/watch?v=qdCHEUaFhBk */

  const search = (searchVal) => {
    //console.info("TO DO!", searchVal);
    const filteredBookings = bookings.filter(
      (booking) =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
    //check first 18. commit for task 19
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings ? <SearchResults results={bookings} /> : <p>loading..</p>}
      </div>
    </div>
  );
};

export default Bookings;

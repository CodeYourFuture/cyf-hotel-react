import React, { useState, useEffect } from "react";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";


const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((error) => {
        console.log(error + "in file Bookings.jsx");
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={Search} />
        <SearchResults results={bookings} list={bookings} />
      </div>
    </div>
  );
};

export default Bookings;



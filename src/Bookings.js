import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = ({ setRefreshMessages, refreshMessages }) => {
  const [bookings, setBookings] = useState([]);

  //http://localhost:4000/bookings

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/bookings");
      const data = await response.json();
      console.log("fetchData in bookings", data);

      setBookings(data);
    } catch (error) {
      console.error("The ERROR occured in fetchData:", error);
    }
  };

  useEffect(() => {
    fetchData(setBookings);
  }, [refreshMessages]);

  return (
    <div className="App-content">
      <div className="container">
        <Search bookings={bookings} setRefreshMessages={setRefreshMessages} />
        <SearchResults bookings={bookings} setBookings={setBookings} />
      </div>
    </div>
  );
};

export default Bookings;

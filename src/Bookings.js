import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  // For creating the booking table
  const [booking, setBooking] = useState([]);
  //For datas recieved from the fetch
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/error")
      .then(response => response.json())
      .then(data => {
        setInitialData(data);
        setBooking(data);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBooking(
      initialData.filter(
        value =>
          value.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          value.surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {booking.error ? "something went wrong" : ""}
        <SearchResults results={booking} />
      </div>
    </div>
  );
};

export default Bookings;

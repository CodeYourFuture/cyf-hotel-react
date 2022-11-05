import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState("fetching");

  useEffect(() => {
    console.log("Fetching data from Bookings");

    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setStatus("loading failed");
        }
        setBookings(data);
        console.log(data);
        setStatus("success");
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);

    let filteredBookings = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
      );
    });
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        {status === "fetching" && "Loading Please wait..."}
        {status === "success" && (
          <>
            <Search search={search} />
            <SearchResults results={bookings} />
          </>
        )}
        {status === "loading failed" && "Sorry, failed loading!"}
      </div>
    </div>
  );
};

export default Bookings;

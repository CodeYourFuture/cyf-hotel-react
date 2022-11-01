import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
import { useState, useEffect } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState("fetching");
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      // fetch(`https://cyf-react.glitch.me/error`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
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
            <SearchResults bookings={bookings} />
          </>
        )}
        {status === "loading failed" && "Sorry, failed loading!"}
      </div>
    </div>
  );
};

export default Bookings;

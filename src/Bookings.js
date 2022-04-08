import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState("fetching");

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/error")
      .then(status)
      .then(res => {
        if (res.ok) {
          res.json();
        }
        throw new Error("Something went wrong");
      })
      .then(data => {
        setBookings(data);
        setStatus("success");
      })
      .catch(() => {
        setStatus("failure");
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const filteredBookings = bookings.filter(({ firstName, surname }) => {
      if (firstName === searchVal || surname === searchVal) {
        return true;
      } else {
        return false;
      }
    });
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        {status === "fetching" && "PLEASE WAIT..."}
        {status === "success" && (
          <>
            <Search search={search} />
            <SearchResults bookings={bookings} />
          </>
        )}
        {status === "failure" && "SOMETHING WENT WRONG"}
      </div>
    </div>
  );
};

export default Bookings;

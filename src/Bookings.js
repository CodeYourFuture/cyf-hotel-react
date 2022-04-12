import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState("fetching");

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setStatus("failure");
        } else {
          setBookings(data);
          setStatus("success");
        }
      })
      .catch(() => {
        setStatus("failure");
      });
  }, []);

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
        {status === "fetching" && "Loading, please wait..."}
        {status === "success" && (
          <>
            <Search search={search} />
            <SearchResults bookings={bookings} />
          </>
        )}
        {status === "failure" && "Looks like something went wrong"}
      </div>
    </div>
  );
};

export default Bookings;

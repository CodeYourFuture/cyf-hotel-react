import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  //useState
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState("fetching");

  //useEffect
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
      });
  }, []);

  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    let findBooking = bookings.filter(({ firstName, surname }) => {
      if (
        firstName.toLowerCase() === searchVal.toLowerCase() ||
        surname.toLowerCase() === searchVal.toLowerCase()
      ) {
        return true;
      } else {
        return false;
      }
    });
    return setBookings(findBooking);
  };

  return (
    <div className="App-content">
      <div className="container">
        {status === "fetching" ? "LOADING, PLEASE WAIT..." : null}
        {status === "success" && (
          <>
            <Search search={search} />
            <SearchResults results={bookings} />
          </>
        )}
        {status === "failure" && "OOPS, SOMETHING WENT WRONG"}
      </div>
    </div>
  );
};

export default Bookings;

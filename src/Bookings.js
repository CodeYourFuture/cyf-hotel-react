import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import ourBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState("fetching"); //fetching, success, failed

  useEffect(() => {
    // console.log("something");
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setIsLoading(false);
        setStatus("success");
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
        {isLoading === "fetching" && "LOADING, PLEASE WAIT..."}
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

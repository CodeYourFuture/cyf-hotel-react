import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  // const [isListLoaded, setIsListLoaded] = useState(false)
  const [status, setStatus] = useState("starting");
  useEffect(() => {
    setStatus("fetching");
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setStatus("failed");
        } else {
          setBookings(data);
          setStatus("loaded");
        }
      });
  }, []);

  const search = searchVal => {
    console.log(searchVal);
    const filteredData =
      searchVal.length > 0
        ? bookings.filter(
            booking =>
              booking.firstName
                .toLowerCase()
                .includes(searchVal.toLowerCase()) ||
              booking.surname.toLowerCase().includes(searchVal.toLowerCase())
          )
        : booking;
    setBookings(filteredData);
    console.log(filteredData);
  };

  return (
    <div className="App-content">
      <div className="container">
        {/* <Search list={bookings} />  */}
        {status === "loaded" && (
          <>
            {" "}
            <Search search={search} />
            <SearchResults list={bookings} />
          </>
        )}
        {status === "fetching" && "Loading data..."}
        {status === "failed" && "The data load process has failed."}
      </div>
    </div>
  );
};

export default Bookings;

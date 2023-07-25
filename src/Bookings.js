import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import LoadingWait from "./LoadingWait.js";

const Bookings = () => {
  let [dataAvailable, setDataAvailable] = useState(false);

  useEffect(() => {
    fetch("https://malkit-hotel-server.glitch.me/bookings")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
        setMasterBookings(data);
        setDataAvailable(true);
      });
  }, []);

  let [bookings, setBookings] = useState([]);
  let [masterBookings, setMasterBookings] = useState([]);

  const search = (searchVal) => {
    fetch("https://malkit-hotel-server.glitch.me/bookings/search?term=" + searchVal)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let filteredBookings = data;
        setBookings(filteredBookings);
      });
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {dataAvailable ? <SearchResults results={bookings} /> : <LoadingWait />}
      </div>
    </div>
  );
};

export default Bookings;

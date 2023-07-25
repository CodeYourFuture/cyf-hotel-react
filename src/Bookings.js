import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import LoadingWait from "./LoadingWait.js";

const Bookings = () => {
  const [deleteRow, setDeleteRow] = useState(null);
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

  useEffect(() => {
    if (deleteRow)
      fetch("https://malkit-hotel-server.glitch.me/bookings/" + deleteRow, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBookings(data);
          setMasterBookings(data);
          setDataAvailable(true);
        });
  }, [deleteRow]);

  let [bookings, setBookings] = useState([]);
  let [masterBookings, setMasterBookings] = useState([]);

  const search = (searchVal) => {
    if (!searchVal) {
      console.log("no search Val");
      fetch("https://malkit-hotel-server.glitch.me/bookings/")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          let filteredBookings = data;
          setBookings(filteredBookings);
        });
    } else {
      fetch("https://malkit-hotel-server.glitch.me/bookings/search?term=" + searchVal)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          let filteredBookings = data;
          setBookings(filteredBookings);
        });
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {dataAvailable ? <SearchResults results={bookings} setDeleteRow={setDeleteRow} /> : <LoadingWait />}
      </div>
    </div>
  );
};

export default Bookings;

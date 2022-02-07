import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";
import { useState, useEffect } from "react";

const Bookings = () => {
  //const [bookings, setBookings] = useState(FakeBookings);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      const bookingsFromServer = await fetchBookings();
      setBookings(bookingsFromServer);
    };
    getBookings();
  }, []);

  const fetchBookings = async () => {
    const res = await fetch("https://cyf-react.glitch.me.");
    const data = await res.json();

    return data;
  };
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  //const [bookings, setBookings] = useState(FakeBookings);
  const [bookings, setBookings] = useState([]);
  const [processing, setProcessing] = useState(true);
  const [position, setPosition] = useState("Receiving");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setProcessing(false);
        setPosition("valid");
      })
      .catch(() => {
        setPosition("invalid");
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
  // eslint-disable-next-line

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

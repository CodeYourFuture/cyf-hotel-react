import React, { useState, useEffect } from "react";
//import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import fakeBookings from "data./FakeBookings.js";

const Bookings = props => {
  const [booking, setBooking] = useState([]);
  //const [bookng, setBookng] = useState("");

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(json => setBooking(json));
  }, []);

  return (
    <div className="App-content">{<SearchResults results={booking} />}</div>
  );
};

export default Bookings;

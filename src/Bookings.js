import React, { useEffect, useState } from "react";
import CustomerProfile from "./components/CustomerProfile.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState();
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => {
        return response.json();
      })
      .then(result => {
        setBookings(result);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} setBookings={setBookings} />
      </div>
    </div>
  );
};

export default Bookings;

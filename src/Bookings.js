import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import "./Bookings.css";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(bookings);

  useEffect(() => {
    // fetch(`https://cyf-react.glitch.me`)
    setLoading(true);
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
        setLoading(false);
      });
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    let user = bookings.filter(
      name =>
        name.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        name.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(user);
  };
  if (loading) {
    return <div className="center"> Loading ...</div>;
  }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings.length !== 0 && <SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;

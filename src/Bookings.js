import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBookings = [];
    bookings.forEach(booking => {
      if (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      ) {
        filteredBookings.push(booking);
      }
    });
    setBookings(filteredBookings);
  };

  const [bookings, setBookings] = useState(0);
  const [profile, setProfile] = useState(0);

  useEffect(() => {
    console.log("use effect...");
    // fetch("https://cyf-react.glitch.me/delayed")
    fetch("https://cyf-react.glitch.me/error")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  function showProfile(profile) {
    setProfile(profile);
  }
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} handleProfile={showProfile} />
        <CustomerProfile customerId={profile} />
        {/* <SearchResults /> */}
      </div>
    </div>
  );
};

export default Bookings;

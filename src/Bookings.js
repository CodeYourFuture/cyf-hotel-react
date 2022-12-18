import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  function showProfile(profile) {
    setProfile(profile);
  }

  const search = searchVal => {
    const filteredName = bookings.filter(
      booking =>
        booking.firstName.toLowerCase() === searchVal ||
        booking.surname.toLowerCase() === searchVal
    );
    setBookings(filteredName);
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        {bookings.length === 0 ? (
          <p>Please wait while it's loading</p>
        ) : (
          <>
            <Search search={search} />
            <SearchResults results={bookings} showProfile={showProfile} />
            <CustomerProfile profile={profile} />
          </>
        )}
      </div>
    </div>
  );
};

export default Bookings;

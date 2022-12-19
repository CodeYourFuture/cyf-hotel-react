import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./component/SearchResults";
// import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./component/CustomerProfile.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [profile, setprofile] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    searchVal = searchVal.toLowerCase();
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase() === searchVal ||
        booking.surname.toLowerCase() === searchVal
    );
    setBookings(filteredBookings);
  };

  const fetchData = async id => {
    const res = await fetch(`https://cyf-react.glitch.me/customers/${id}`);
    const data = await res.json();
    setprofile(data);
  };
  function showProfile(id) {
    fetchData(id);
  }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} showProfile={showProfile} />
        <CustomerProfile customerProfile={profile} />
      </div>
    </div>
  );
};

export default Bookings;

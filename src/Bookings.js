import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [booking, setBooking] = useState([]);
  const [customerProfile, setCustomerProfile] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBooking(data));
  }, []);
  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    searchVal = searchVal.toLowerCase();
    const filterd = booking.filter(
      item =>
        item.firstName.toLowerCase() === searchVal ||
        item.surname.toLowerCase() === searchVal
    );
    setBooking(filterd);
  };

  const showProfile = async id => {
    const res = await fetch(`https://cyf-react.glitch.me/customers/${id}`);
    if (res.status === 200) {
      const data = await res.json();
      setCustomerProfile(data);
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={booking} showProfile={showProfile} />
        <CustomerProfile customerProfile={customerProfile} />
      </div>
    </div>
  );
};

export default Bookings;

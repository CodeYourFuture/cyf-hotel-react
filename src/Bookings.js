import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";
import CreateNewBookings from "./CreateNewBookings.js";

const Bookings = () => {
  // task -14
  const [bookings, setBookings] = useState([]);

  // task 16
  useEffect(() => {
    // console.log("loading for the first time")
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    const newBookings = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
      );
    });

    setBookings(newBookings);
  };

  const [customerProfile, setCustomerProfile] = useState(false);
  function showProfile(id) {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setCustomerProfile(data));
  }

  return (
    <div className="App-content">
      <div>
        <Search search={search} {...setBookings} />
        <SearchResults results={bookings} showProfile={showProfile} />
        <CustomerProfile
          {...customerProfile}
          closeCustomerProfile={setCustomerProfile}
        />
        <CreateNewBookings setBookings={setBookings} />
      </div>
    </div>
  );
};

export default Bookings;

import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile";

const Bookings = () => {
  const search = searchVal => {
    bookings.forEach(person => {
      if (
        person.firstName === searchVal.toLowerCase() ||
        person.surname === searchVal.toLowerCase() ||
        person.firstName.toLowerCase() === searchVal.toLowerCase() ||
        person.surname.toLowerCase() === searchVal.toLowerCase()
      ) {
        setBooking([person]);
      }
    });
  };
  const [bookings, setBooking] = useState([]);
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [customerProfile, setCustomerProfile] = useState({});
  const buttonClicked = e => {
    setSelectedProfileId(e.target.value);
  };
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBooking(data));
  }, []);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${selectedProfileId}`)
      .then(res => res.json())
      .then(data => setCustomerProfile(data));
  }, [selectedProfileId]);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} buttonClicked={buttonClicked} />
        <CustomerProfile
          selectedProfileId={selectedProfileId}
          customerProfile={customerProfile}
        />
      </div>
    </div>
  );
};

export default Bookings;

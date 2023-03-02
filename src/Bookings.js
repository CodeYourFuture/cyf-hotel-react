import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = props => {
  const [searchInput, setSearchInput] = useState("");
  const [bookings, setBookings] = useState([]);
  const [profile, setProfile] = useState(null);

  function setCustomerProfile(id) {
    console.log(id);
    const currentProfile = bookings.find(result => result.id == id);
    setProfile(currentProfile);
  }

  function handleSearchInput(event) {
    // console.log(event.target.value);
    setSearchInput(event.target.value);
    // console.log(searchInput);
  }

  function handleSubmit(event) {
    // console.log(searchInput);
    event.preventDefault();
    search(searchInput);
  }

  const search = searchVal => {
    const filteredValue = bookings.filter(value => {
      return (
        value.firstName.toLowerCase().includes(searchVal) ||
        value.surname.toLowerCase().includes(searchVal)
      );
    });
    setBookings(filteredValue, searchVal);
  };

  useEffect(() => {
    console.log("Fetching Booking information");
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search
          searchInput={searchInput}
          handleSearchInput={handleSearchInput}
          handleSubmit={handleSubmit}
        />
        <SearchResults
          results={bookings}
          searchInput={searchInput}
          setCustomerProfile={setCustomerProfile}
        />
        {profile && <p>Customer {profile.id} Profile</p>}
      </div>
    </div>
  );
};

export default Bookings;

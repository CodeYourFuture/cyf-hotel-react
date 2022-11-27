import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import Fakebookings from "./data/fakeBookings.json";
import { useState } from "react";
import { useEffect } from "react";
import CustomerProfile from "./CustomerProfile.js";
const Bookings = () => {
  //const [Bookings] = useState(Fakebookings);
  const [bookings, setBookings] = useState(Fakebookings);
  const [profileId, setProfileId] = useState(null);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/customers")
      .then(response => response.json())
      .then(apiBookings => setBookings(apiBookings));
  });

  const search = searchVal => {
    //console.info("TO DO!", searchVal);
    if (searchVal !== "") {
      const filterBookings = bookings.filter(
        // object deconstraction
        booking =>
          booking.firstName === searchVal || booking.surname === searchVal
      );
      setBookings(filterBookings);
    } else {
      setBookings(bookings);
    }
  };

  const idUpdater = id => {
    setProfileId(id);
  };

  return (
    <div className="App-content">
      <div className="container">
        {/*dataLoading ? <h4 className="loadingData">Data Loading...</h4> : ""*/}
        <Search search={search} />
        <SearchResults results={bookings} setProfileId={idUpdater} />
        {profileId && <CustomerProfile id={profileId} />}
      </div>
    </div>
  );
};

export default Bookings;

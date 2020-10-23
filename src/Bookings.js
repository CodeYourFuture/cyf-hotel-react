import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  let [getRespons, setRespons] = useState("");
  const [booking, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(respons => respons.json())
      .then(data => {
        setBookings(data);
      });
  }, [getRespons]);

  const search = searchVal => {
    // look to the first name and surname
    let data = booking.filter(
      costumer =>
        costumer.firstName === searchVal || costumer.surname === searchVal
    );

    setBookings(data);
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={booking} />
        {/* <CustomerProfile /> */}
      </div>
    </div>
  );
};

export default Bookings;

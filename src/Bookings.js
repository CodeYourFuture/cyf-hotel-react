import React, { useState, useEffect } from "react";
import Search from "./Search";
import { SearchResults } from "./components";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    setBookings(
      bookings.filter(customerBooking =>
        isEqualToFirstNameOrSurname(
          customerBooking.firstName.toLowerCase(),
          customerBooking.surname.toLowerCase(),
          searchVal.toLowerCase()
        )
      )
    );
  };

  const isEqualToFirstNameOrSurname = (firstName, surName, searchVal) => {
    return firstName === searchVal || surName === searchVal;
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);
  if (!bookings) {
    return "Loading...";
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults customerBookings={bookings} />
        </div>
      </div>
    );
  }
};

export default Bookings;

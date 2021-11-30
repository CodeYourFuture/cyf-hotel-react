import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./Components/SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = searchVal => {
    searchVal = searchVal.toLowerCase();

    setBookings(bookings =>
      // return any array element where the first or second name contains the users input. Users input and the persons name is sanitized to be lowercase.
      bookings.filter(person => {
        return (
          person.firstName.toLowerCase().includes(searchVal) ||
          person.surname.toLowerCase().includes(searchVal)
        );
      })
    );
  };

  // useEffect(() => {
  //   fetch("https://cyf-react.glitch.me")
  //     .then((response) => response.json())
  //     .then((data) => setBookings((bookings) => (bookings = data)))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

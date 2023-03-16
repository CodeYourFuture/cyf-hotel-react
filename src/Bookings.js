import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    console.log("Fetching data from FakeBookings");

    fetch("https://cyf-react.glitch.me/delayed")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      })
      .catch((err) => {
        setErrorMessage("500 HTTP error");
      });
  }, []);
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    const filteredBooking = bookings.filter((name) =>
      // name.firstName.toLowerCase() === searchVal.toLowerCase() ||
      // name.surname.toLowerCase() === searchVal.toLowerCase() ||
      name.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
      name.surname.toLowerCase().includes(searchVal.toLowerCase())
        ? setBookings([name])
        : -1
    );
    console.log(filteredBooking);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : bookings.length === 0 ? (
          <p>Loading ...</p>
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;

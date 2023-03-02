import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = props => {
  const [bookings, setBookings] = useState([]);

  const search = searchVal => {
    const filteredValue = bookings.filter(value => {
      return (
        value.firstName.toLowerCase().includes(searchVal) ||
        value.surname.toLowerCase().includes(searchVal)
      );
    });
    setBookings(filteredValue, searchVal);
  };

  // searchInput.oninput = (e) => {
  // let value = e.target.value.toLowerCase();
  // const filteredEpisodes = episodes.filter((episode) => {
  //   return (
  //     episode.name.toLowerCase().includes(value) ||
  //     episode.summary.toLowerCase().includes(value)
  //   );
  // });

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
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

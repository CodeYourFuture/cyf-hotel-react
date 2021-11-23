import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import "./App.css";
const data = [
  "id",
  "title",
  "first name",
  "sure name",
  "email",
  "room id",
  "check in date",
  "check out date",
  "number of nights"
];

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <h1>Bookings</h1>
        <SearchResults table={data} results={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;

import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "../src/data/fakeBookings.json";
var allData;
// import FakeBookings from "./data/fakeBookings.json";
const FakeBookings = [
  {
    id: 1,
    title: "MRS",
    firstName: "Hiba",
    surname: "Mohammed",
    email: "hiba.moh@yahoo.com",
    roomId: 212,
    checkInDate: "12-01-20",
    checkOutDate: "12-01-20"
  },
  {
    id: 1,
    title: "MRS",
    firstName: "Hiba",
    surname: "Mohammed",
    email: "hiba.moh@yahoo.com",
    roomId: 212,
    checkInDate: "12-01-20",
    checkOutDate: "12-01-20"
  },
  {
    id: 1,
    title: "MRS",
    firstName: "Hiba",
    surname: "Mohammed",
    email: "hiba.moh@yahoo.com",
    roomId: 212,
    checkInDate: "12-01-20",
    checkOutDate: "12-01-20"
  }
];

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults fakeBookings={fakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;

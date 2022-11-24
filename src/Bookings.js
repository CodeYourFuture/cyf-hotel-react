import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

// const guests = [
//   {
//     id: 2,
//     title: "Ms",
//     firstName: "Tsione",
//     surname: "Abraham",
//     email: "abrahame@gmail.com",
//     roomId: 1,
//     checkInDate: "2024 - 11 - 21",
//     checkOutDate: "2024 - 11 - 30",
//   },
//   {
//     id: 2,
//     title: "Ms",
//     firstName: "Tsione",
//     surname: "Abraham",
//     email: "abrahame@gmail.com",
//     roomId: 1,
//     checkInDate: "2024 - 11 - 21",
//     checkOutDateDate: "2024 - 11 - 30",
//   },
//   {
//     id: 2,
//     title: "Ms",
//     firstName: "Tsione",
//     surname: "Abraham",
//     email: "abrahame@gmail.com",
//     roomId: 1,
//     checkInDate: "2024 - 11 - 21",
//     checkout: "2024 - 11 - 30",
//   },
// ];

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bkings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";



const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Frist Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
              <th scope="col">Room ID</th>
              <th scope="col">Check in Date</th>
              <th scope="col">Check out Date</th>
              <th scope="col">Number of Nights</th>
            </tr>
          </thead>
          <SearchResults results={FakeBookings} />
        </table>
      </div>
    </div>
  );
};

export default Bookings;

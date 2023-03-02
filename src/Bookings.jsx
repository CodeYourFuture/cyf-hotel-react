import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
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
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Firstname</th>
              <th scope="col">Surename</th>
              <th scope="col">Email</th>
              <th scope="col">Room ID</th>
              <th scope="col">Check in</th>
              <th scope="col">Check out</th>
              <th scope="col">Nights</th>
            </tr>
          </thead>
          <SearchResults results={bookings} />
        </table>
      </div>
    </div>
  );
};

export default Bookings;

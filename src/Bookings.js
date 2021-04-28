import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <div className="search-result-table">
          <table className="table  ">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Room Id</th>
                <th scope="col">Check In Date</th>
                <th scope="col">Check Out date</th>
                <th scope="col">Number of Nights</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => {
                return <SearchResults results={booking} key={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;

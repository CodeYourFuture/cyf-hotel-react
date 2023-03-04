import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  useEffect(() => {
    console.log("Fetching information ...");
    fetch("https://cyf-react.glitch.me")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((er) => {
        console.log(er);
      });
  }, []);

  const [bookings, setBookings] = useState([]);

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
              <th scope="co l">Firstname</th>
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

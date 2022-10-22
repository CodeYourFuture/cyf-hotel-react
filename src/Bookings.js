import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, SetBookings] = useState([]);
  const [filteredResult, setFilteredResult] = useState(bookings);
  const [status, setStatus] = useState("fetching");

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        SetBookings(data);
        setStatus("success");
        setFilteredResult(data);
      })
      .catch(() => {
        setStatus("failure");
      });
  }, []);

  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    let filteredBookings = bookings.filter(client => {
      return (
        client.firstName.toLowerCase() === searchVal.toLowerCase() ||
        client.surname.toLowerCase() === searchVal.toLowerCase()
      );
    });
    setFilteredResult(filteredBookings);
  };

  const CostumerProfile = () => {
    <button>Profile</button>;
  };
  return (
    <div className="App-content">
      <div className="container">
        {status === "fetching" && "Loading..."}
        {status === "success" && (
          <>
            <Search search={search} />
            <SearchResults bookings={filteredResult} />
          </>
        )}
        {status === "failure" && "Something went Wrong"}
      </div>
    </div>
  );
};

export default Bookings;

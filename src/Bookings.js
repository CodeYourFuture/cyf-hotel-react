import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, SetBookings] = useState([]);
  const [filteredResult, setFilteredResult] = useState(bookings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        SetBookings(data);
        setLoading(false);
        setFilteredResult(data);
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
        {loading ? (
          "Loading..."
        ) : (
          <>
            <Search search={search} />
            <SearchResults bookings={filteredResult} />
          </>
        )}
      </div>
    </div>
  );
};

export default Bookings;

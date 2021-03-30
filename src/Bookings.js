import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const filteredSearch = bookings.filter(booking => {
      return (
        booking.firstName.includes(searchVal) ||
        booking.surname.includes(searchVal)
      );
    });
    setBookings(filteredSearch);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        setLoading(true);
        setBookings(data);
      });
  }, []);

  return (
    <div className="App-content">
      {loading ? (
        <div className="container">
          <Search search={search} />
          <SearchResults
            results={bookings}
            tableHeaders={[
              "id",
              "title",
              "first name",
              "surname",
              "email",
              "room id",
              "check in date",
              "check out date",
              "staying for",
              "profile"
            ]}
          />
        </div>
      ) : (
        <span className="loading-span">Loading...</span>
      )}
    </div>
  );
};

export default Bookings;

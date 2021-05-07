import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    console.log(searchVal);
    const filteredSearch = bookings.filter(booking => {
      console.log(booking.id);
      return (
        booking.firstName.includes(searchVal) ||
        booking.surname.includes(searchVal) ||
        searchVal.includes(booking.id)
      );
    });
    setBookings(filteredSearch);
  };

  useEffect(() => {
    fetch("https://biruk-hotel-server.herokuapp.com/bookings")
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

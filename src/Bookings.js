import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://cyf-react.glitch.me`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    setBookings((prev) =>
      prev.filter(
        (item) =>
          item.firstName.toLowerCase() === searchVal ||
          item.surname.toLowerCase() === searchVal
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

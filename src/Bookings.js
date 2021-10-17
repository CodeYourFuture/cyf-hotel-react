import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://cyf-react.glitch.me");
      const data = await response.json();
      setBookings(data);
    }
    fetchData();
  }, []);

  const search = searchVal => {
    const searchedNames = FakeBookings.filter(
      //TO DO : UPDATE FakeBookings DATA
      person =>
        person.firstName.toLowerCase().includes(searchVal) ||
        person.surname.toLowerCase().includes(searchVal)
    );
    setBookings(searchedNames);
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

import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = searchVal => {
    //TO DO: update the function or DATA
    const searchedNames = bookings.filter(
      person =>
        person.firstName.toLowerCase().includes(searchVal) ||
        person.surname.toLowerCase().includes(searchVal)
    );
    setBookings(searchedNames);
  };

  useEffect(() => {
    async function fetchData() {
      console.log("data fetch....");
      const response = await fetch("https://cyf-react.glitch.me");
      const data = await response.json();
      setBookings(data);
    }
    fetchData();
  }, []);

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

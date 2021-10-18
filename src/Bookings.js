import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = searchVal => {
    //TO DO: update the function or DATA, currently after search my data is gone, need new fetch
    const searchedNames = bookings.filter(
      person =>
        person.firstName.toLowerCase().includes(searchVal) ||
        person.surname.toLowerCase().includes(searchVal)
    );
    setBookings(searchedNames);
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      console.log("data fetch....");
      const response = await fetch("https://cyf-react.glitch.me/delayed");
      const data = await response.json();
      setBookings(data);
      setIsLoading(!isLoading);
    }
    fetchData();
  }, []);

  return (
    // <div className="App-content">
    <section className="searchSection">
      <Search search={search} />
      <div
        style={{ display: `${!isLoading ? "none" : ""}` }}
        className="loading-message"
      >
        <div class="spinner-border text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <SearchResults results={bookings} />
    </section>
    // </div>
  );
};

export default Bookings;

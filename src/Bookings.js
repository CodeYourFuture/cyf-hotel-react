import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  let url = "https://cyf-react.glitch.me";
  const [bookings, setBookings] = useState([]);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    if (searchVal) {
      const matchName = bookings.filter(person => {
        return person.firstName
          .toLowerCase()
          .includes(
            searchVal || person.lasttName.toLowerCase().includes(searchVal)
          );
      });

      setBookings(matchName);
    }
  };
  useEffect(() => {
    function fitchData() {
      fetch("https://cyf-react.glitch.me")
        .then(res => res.json())

        .then(data => setBookings(data));
    }
    fitchData();
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults data={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

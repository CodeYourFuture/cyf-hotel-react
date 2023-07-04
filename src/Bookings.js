import React, {useEffect, useState} from 'react';
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.jsx";

// import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import SearchResultsOther from './components/SearchResultsOther.js';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
      fetch("https://cyf-react.glitch.me")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      })
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        {/* <SearchResultsOther results={bookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;

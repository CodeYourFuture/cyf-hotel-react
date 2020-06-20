import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);
  // const [loadedBookings, setLoadedBookings] = useState(false);

  useEffect(() => {
    // fetch(`https://cyf-react.glitch.me`)
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const filterBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filterBookings);
  };

  return bookings ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} setBookings={setBookings} />
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  ) : (
    <div>
      <div className="loader">
        <b>loading the data</b>......
        <img
          className="logo"
          src="https://media1.tenor.com/images/10f57e97dc8f862aad6ba66bac682565/tenor.gif?itemid=15870925"
          alt=""
        />
      </div>
      <div className="loader" />
    </div>
  );
};

export default Bookings;

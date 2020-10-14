import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);

    bookings.map(el => {
      if (
        searchVal.toLowerCase() == el.firstName.toLowerCase() ||
        searchVal.toLowerCase() == el.surname.toLowerCase()
      ) {
        setBookings([el]);
      }
    });
  };

  function costomerId(userId) {
    setId(userId);
    console.log("user ID ", userId);
  }

  if (bookings.length > 0) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />

          {<SearchResults results={bookings} costomerId={costomerId} id={id} />}
        </div>
      </div>
    );
  } else {
    return <h1>Loadding...</h1>;
  }
};

export default Bookings;

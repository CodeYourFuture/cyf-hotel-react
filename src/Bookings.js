import React, { useState, useEffect } from "react";
// import FakeBookings from "./data/fakeBookings.json";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

// Renders bookings container (eventually will perform a search), called by `App.js`.
const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  const [bookings, setBookings] = useState(null);

  // Fetch and convert data to a usable format with error/status checking.
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response =>
        response.status >= 200 && response.status <= 299
          ? response.json()
          : new Error(
              `Unexpected Error: ${response.status} ${response.statusText}`
            )
      )
      .then(data => setBookings(data))
      .catch(error => console.log(`Error received: ${error}`));
  }, []);

  // Render bookings table if fetch had complete and bookings contains data.
  return (
    <div>
      {bookings ? (
        <div className="Bookings-content">
          <div className="container">
            <Search search={search} />
            <SearchResults results={bookings} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Bookings;

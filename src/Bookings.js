import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const search = searchVal => {
    // console.info("TO DO!", searchVal);

    const filteredSearch = bookings.filter(data => {
      return (
        data.firstName.includes(searchVal) || data.surname.includes(searchVal)
      );
    });
    setBookings(filteredSearch);
  };

  return (
    <div className="App-content">
      <div className="container">
        {loading ? (
          <p>Details will be loaded shortly...</p>
        ) : (
          <>
            <Search search={search} />
            <SearchResults results={bookings} />
          </>
        )}
      </div>
    </div>
  );
};

export default Bookings;

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filterBookings, setFilterBookings] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    //fetch(`https://cyf-react.glitch.me/`)
    fetch(`https://cyf-react.glitch.me/delayed`)
      //fetch(`https://cyf-react.glitch.me/error`)
      .then(res => {
        if (res.status === 500) {
          throw new Error(res.status);
        } else {
          return res.json();
        }
      })
      .then(data => {
        setBookings(data);
        setFilterBookings(data);
        setIsDataLoaded(false);
      })
      .catch(error => setError(true));
  }, []);

  const search = searchVal => {
    const filteredBooking = bookings.filter(({ firstName, surname }) => {
      return firstName === searchVal || surname === searchVal;
    });

    if (!filteredBooking.length) {
      setFilterBookings(bookings);
      return;
    }

    setFilterBookings(filteredBooking);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!isDataLoaded ? (
          <SearchResults bookings={filterBookings} />
        ) : !error ? (
          <p>Loading..... Please Wait</p>
        ) : (
          <p>Error..... Content not found</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;

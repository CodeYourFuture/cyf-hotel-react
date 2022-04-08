import React, { useState, useEffect } from "react";
import Search from "./search/Search";
import SearchResults from "./search/SearchResults";

const Bookings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => setBookings(data), setIsLoading(false));
  }, []); // only run once after the first render (please)

  const search = searchVal => {
    const filteredBookings = bookings.filter(({ firstName, surname }) =>
      firstName === searchVal || surname === searchVal ? true : false
    );
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            <Search search={search} />
            <SearchResults bookings={bookings} />
          </>
        )}
      </div>
    </div>
  );
};

export default Bookings;

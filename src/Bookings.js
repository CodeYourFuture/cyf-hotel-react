import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const search = searchVal => {
    const newBookings = bookings.filter(
      el =>
        el.firstName.toLowerCase().includes(searchVal) ||
        el.surname.toLowerCase().includes(searchVal)
    );
    setBookings(newBookings);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setIsError(true);
          setIsLoading(false);
        } else {
          setBookings(data);
          setIsLoading(false);
        }
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <SearchResults results={bookings} />
        )}
        {isError && <div>There was an error</div>}
      </div>
    </div>
  );
};

export default Bookings;

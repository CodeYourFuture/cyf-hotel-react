import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import Loader from "./Loader";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [allBookings, setAllBookings] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = () => {
      return fetch("https://cyf-react.glitch.me/delayed")
        .then(res => res.json())
        .then(
          data => {
            setIsLoaded(true);
            setBookings(data);
            setAllBookings(data);
          },
          // From https://reactjs.org/docs/faq-ajax.html
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          error => {
            setIsLoaded(true);
            setError(error);
          }
        );
    };
    fetchBookings();
  }, []);

  const search = searchVal => {
    const matchingBookings = allBookings.filter(({ firstName, surname }) => {
      return (
        firstName.toLowerCase().includes(searchVal) ||
        surname.toLowerCase().includes(searchVal)
      );
    });

    setBookings(matchingBookings);
  };

  let searchResults;
  if (error) {
    searchResults = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    searchResults = <Loader />;
  } else {
    searchResults = <SearchResults results={bookings} />;
  }
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {searchResults}
      </div>
    </div>
  );
};

export default Bookings;

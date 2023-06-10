import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResult";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    bookings.filter(name =>
      name.firstName.toLowerCase() === searchVal.toLowerCase() ||
      name.surname.toLowerCase() === searchVal.toLowerCase() ||
      name.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
      name.surname.toLowerCase().includes(searchVal.toLowerCase())
        ? setBookings([name])
        : -1
    );
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => {
        if (!res.ok) {
          throw Error("Failed to fetch bookings");
        }
        return res.json();
      })
      .then(data => {
        setBookings(data);

        setIsLoading(false);
        setErrorMessage(null);
      })
      .catch(error => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};
export default Bookings;

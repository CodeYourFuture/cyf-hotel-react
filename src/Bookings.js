import React, {useState, useEffect} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";
import SearchButton from "./SearchButton.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] =  useState(null);

  const search = (searchVal) => {
    setIsLoading (true);
    setError(null);
    setTimeout(() => {
      fetch(`https://cyf-react.glitch.me/customers/${searchVal}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setBookings(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
    }, 5000); 
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
         {isLoading ? (
          <p>Loading data...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
        <SearchButton results={bookings} />
        <SearchResults results={FakeBookings} />
        </>
        )}
      </div>
    </div>
  );
};

export default Bookings;

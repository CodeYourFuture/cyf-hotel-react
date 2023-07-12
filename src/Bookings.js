import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const search = (searchVal) => {
    if (searchVal !== "") {
      searchVal = searchVal.toLowerCase();
      let filteredResults = bookings.filter((booking) => {
        return (
          booking.firstName.toLowerCase().includes(searchVal) ||
          booking.surname.toLowerCase().includes(searchVal)
        );
      });
      setBookings(filteredResults);
    } else {
      setBookings(allData);
    }
  };
  function doingFetchForTable() {
    fetch("https://cyf-react.glitch.me/error")
      .then((response) => {
        if (response.ok) {
          throw new Error("Error while data fetching(");
        }
        return response.json();
      })
      .then((data) => {
        setAllData(data);
        setBookings(data);
        setIsLoading(false);
        setErrorMessage(null);
      })
      .catch((errorMessage) => {
        setIsLoading(false);
        setErrorMessage(errorMessage.message);
      });
  }

  useEffect(() => {
    doingFetchForTable();
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading ? (
          <p>Please wait while the information is loading...</p>
        ) : errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;

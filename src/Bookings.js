import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

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
    fetch("https://cyf-react.glitch.me")
      .then((response) => {
        if (!response.ok) {
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

  const SearchContainer = () => {
    if (isLoading) {
      return <p>Please wait while the information is loading...</p>;
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
  return <SearchContainer />;
};

export default Bookings;

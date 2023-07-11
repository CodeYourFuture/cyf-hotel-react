import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const search = (searchVal) => {
    console.log("value", searchVal);
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
      // user entered empty search query.
      setBookings(allData);
    }
  };
  function doingFetchForTable() {
    fetch("https://cyf-react.glitch.me/delayed")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllData(data);
        setBookings(data);
        setIsLoading(false);
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
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;

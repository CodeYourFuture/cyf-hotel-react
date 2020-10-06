import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = ({ newCustomerInfo }) => {
  const [bookings, setBookings] = useState([]);
  const [countEmptySearches, setCountEmptySearches] = useState(0);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isError, setIsError] = useState(false);
  const search = searchVal => {
    let results = bookings.filter(item => {
      return (
        item.firstName.toLowerCase() === searchVal.toLowerCase() ||
        item.surname.toLowerCase() === searchVal.toLowerCase()
      );
    });
    if (results.length > 0) {
      setBookings(results);
    } else if (searchVal) {
      setBookings([]);
    } else {
      setCountEmptySearches(countEmptySearches + 1);
    }
  };

  useEffect(() => {
    fetch("https://osman-hotel-server.herokuapp.com/bookings")
      .then(res => {
        if (!res.ok) {
          throw Error(res);
        }
        return res.json();
      })
      .then(res => {
        setBookings(res);
        setIsLoadingData(false);
      })
      .catch(() => setIsError(true));
  }, [countEmptySearches]);

  return isError ? (
    <div className="container">
      <div className="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> something went really wrong, we will fix it
        though.
      </div>
    </div>
  ) : isLoadingData ? (
    <div className="App-content">
      <div className="container">
        <div className="alert alert-secondary" role="alert">
          Please <strong>wait</strong> while we fetch customer data.
        </div>
      </div>
    </div>
  ) : (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          setBookings={setBookings}
          bookings={bookings}
          newCustomerInfo={newCustomerInfo}
        />
      </div>
    </div>
  );
};

export default Bookings;

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = ({ newCustomerInfo }) => {
  const [bookings, setBookings] = useState([]);
  const [countEmptySearches, setCountEmptySearches] = useState(0);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);
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
    fetch("https://hulking-jumpy-creature.glitch.me/guests")
      .then(res => {
        if (!res.ok) {
          throw Error(res);
        }
        return res.json();
      })
      .then(res => {
        setBookings(res);
        setLoadingData(false);
      })
      .catch(error => setError(error));
  }, [countEmptySearches]);

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger" role="alert">
          <strong>Oh snap!</strong> something went really wrong, we will fix it
          though.
        </div>
      </div>
    );
  }
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loadingData ? (
          <div className="alert alert-secondary" role="alert">
            Please <strong>wait</strong> while we fetch customer data.
          </div>
        ) : (
          <SearchResults results={bookings} newCustomerInfo={newCustomerInfo} />
        )}
      </div>
    </div>
  );
};

export default Bookings;

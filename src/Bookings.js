import React, { useState, useEffect } from "react";
import Search from "./Search";
import { SearchResults } from "./components";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    setBookings(
      bookings.filter(customerBooking =>
        isEqualToFirstNameOrSurname(
          customerBooking.firstName.toLowerCase(),
          customerBooking.surname.toLowerCase(),
          searchVal.toLowerCase()
        )
      )
    );
  };

  const isEqualToFirstNameOrSurname = (firstName, surName, searchVal) => {
    return firstName === searchVal || surName === searchVal;
  };

  useEffect(() => {
    fetch(`http://cyf-hotel-bookings.herokuapp.com/`)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          throw new Error("HTTP error");
        }
      })
      .then(
        data => {
          setIsLoading(true);
          setBookings(data);
        },
        err => {
          setIsLoading(true);
          setError(err);
        }
      );
  }, []);
  if (!isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Can not fetch booking data the following error has occurred:
        <a href="#" className="alert-link">
          {error.toString()}
        </a>
      </div>
    );
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults customerBookings={bookings} />
        </div>
      </div>
    );
  }
};

export default Bookings;

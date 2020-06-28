import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import BookingForm from "./BookingForm";
import "./App.css";

const Bookings = () => {
  const [bookingData, setBookingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortAscending, setSortAscending] = useState(false);
  console.log("sort by id is", { sort: sortAscending });
  useEffect(() => {
    //start loading
    setIsLoading(true);
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      //finxish loading
      .then(data => {
        setIsLoading(false);
        setBookingData(data);
      })
      .catch(err => setError(err));
  }, []);

  const sortBy = item => {
    setSortAscending(!sortAscending);
    sortAscending ? assending(item) : dessending(item);
  };
  const assending = key => {
    bookingData.sort(function(a, b) {
      console.log(a[key]);
      if (a[key].substring) {
        if (a[key].toLowerCase() > b[key].toLowerCase()) {
          return -1;
        }
      } else {
        return a[key] - b[key];
      }
    });
  };

  const dessending = key => {
    bookingData.sort(function(a, b) {
      console.log(a[key]);
      if (a[key].substring) {
        if (a[key].toLowerCase() < b[key].toLowerCase()) {
          return -1;
        }
      } else {
        return b[key] - a[key];
      }
    });
  };

  const updateData = newObj => {
    const formData = {
      ...newObj,
      id: bookingData.length + 1
    };

    setBookingData([...bookingData, formData]);
  };

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const searchResult = bookingData.filter(person => {
      return (
        person.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        person.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookingData(searchResult);
  };
  return (
    <div className="App-content row">
      <Search search={search} />
      {error ? (
        <p>this is an API error</p>
      ) : isLoading ? (
        <p>loading...</p>
      ) : (
        <div className="result-form lg-col-11 col-10">
          <SearchResults results={bookingData} error={error} sortBy={sortBy} />
          <BookingForm updateData={updateData} />
        </div>
      )}
    </div>
  );
};

export default Bookings;

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const [appLoading, setAppLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      APIFetchFn();
    }, 5000);
  }, []);

  const APIFetchFn = () => {
    console.log("testing");
    fetch(`https://cyf-react.glitch.me/`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      });
    setAppLoading(true);
  };

  const search = searchVal => {
    setBookings(
      bookings.filter(
        item =>
          item.firstName.toLowerCase() === searchVal.toLowerCase() ||
          item.surname.toLowerCase() === searchVal.toLowerCase()
      )
    );
    console.info("TO DO!", searchVal);

    // alternative approach //
    // const searchValue = bookings.filter(item => item.firstName.toLowerCase() === searchVal.toLowerCase() ||
    // item.surname.toLowerCase() === searchVal.toLowerCase())
    // setBookings(searchValue);
  };

  return !appLoading ? (
    <p> Please wait...data is downloading</p>
  ) : (
    <>
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      </div>
    </>
  );
};

export default Bookings;

// references used to solve delayed API fetch for task ####22 :
// 1. https://stackoverflow.com/questions/50772982/how-to-delay-the-return-in-react-until-fetch-is-done
// 2. https://www.youtube.com/watch?v=scVRfoTEctc

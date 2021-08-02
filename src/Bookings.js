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
    fetch(`https://cyf-react.glitch.me/`)
      // fetch(`https://cyf-react.glitch.me/error`) // for error message ####23

      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          alert(response.status);
          alert("Something went wrong!!!");
        }
        response.json();
      })
      .then(data => {
        console.log(data);
        setBookings(data);
      })
      .catch(error => {
        console.error("Error:", error);
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
// 3. https://reactgo.com/react-display-loading-screen/

// references for error HTTP CODE display ####23:
// https://stackoverflow.com/questions/55447472/how-can-i-get-my-fetch-error-to-show-an-http-status-code
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

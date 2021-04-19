import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [hasResponse, setResponse] = useState("");

  //Fetch Data
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setResponse(response.status);
          console.log(hasResponse);
        }
      })
      .then(data => setBookings(data))
      .catch(err => console.error(err));
  }, [hasResponse]);

  //Search functionality implemented
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const results = bookings.filter(
      (name, index) =>
        name.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        name.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    if (searchVal === null || searchVal === "") {
      setBookings(bookings);
    } else {
      setBookings(results);
    }
  };
  if (!hasResponse) {
    if (bookings.length > 0) {
      return (
        <div className="App-content">
          <div className="container">
            <Search search={search} />
            {/* <SearchResults results={FakeBookings} /> */}
            <SearchResults results={bookings} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h2>Loading...</h2>
        </div>
      );
    }
  } else {
    return (
      <div className="container">
        <h1> Sorry, data nowhere to be found {hasResponse}</h1>
      </div>
    );
  }
};

export default Bookings;

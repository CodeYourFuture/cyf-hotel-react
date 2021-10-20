import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = searchVal => {
    //console.info("TO DO!", searchVal);
    const filteredVal = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    console.log("Filtered", filteredVal);

    setBookings(() => filteredVal);
    //console.log("bookings", bookings)
  };
  const [display, setDisplay] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log("Page Uploaded");
    fetch("https://cyf-react.glitch.me/error")
      .then(response => {
        if (!response.ok) {
          throw Error("We could not fetch the data for that resource");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setBookings(data);
        setDisplay(false);
        setError(null);
      })
      .catch(err => {
        console.log("error message: ", err.message);
        setError(err.message);
        setDisplay(false);
      });
  }, []);
  return (
    <div className="App-content">
      {error && <div>{error}</div>}
      {display && <div>Loading...</div>}
      {bookings && (
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      )
      // ) : (
      //   <h1>Loading...</h1>
      // )
      }
    </div>
  );
};

export default Bookings;

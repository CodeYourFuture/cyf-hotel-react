import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import AddBookings from "./AddBookings.js";

const Bookings = () => {
  let [bookings, setBookings] = useState([]);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    // searchVal = searchVal.toUppercase();
    console.log(searchVal.toUpperCase());
    setBookings(
      (bookings = bookings.filter(
        booking =>
          booking.firstName.toUpperCase() === searchVal.toUpperCase() ||
          booking.surname.toUpperCase() === searchVal.toUpperCase()
      ))
    );
  };
  /////////////////////////////////////////////////////////////////////////////////////////////

  // Now call the function inside fetch promise resolver

  //////////////////////////////////////////////////////////////////////////////////////////////////
  /*   useEffect(() => {
    fetch(`https://cyf-react.glitch.me/error`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((responseJson) => {
        // Do something with the response
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  ///////////////////////////

  /*   useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        console.log("loaded");
      });
  }, []); */
  ///////////////////////////
  let error;

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/`)
      .then(res => {
        console.log(res);
        console.log(res.status);
        console.log(res.blob);
        if (res.ok) {
          return res.json();
        } else {
          error = res.status;

          console.log("error" + res.status);
        }
      })
      .then(data => {
        setBookings(data);
        console.log("loaded");
      });
  }, []);

  console.log(error);
  //////////////////////////////

  return !bookings.length ? (
    <p>Not loading yet</p>
  ) : (
    <div className="App-content">
      <div className="container">
        <Search search={search} />

        <AddBookings bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

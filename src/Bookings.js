import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  let BookingData = require("./data/fakeBookings.json");
  // console.log("Yoo I am in booking.js"+BookingData)
  // eslint-disable-next-line
  let [Booking, setBooking] = useState(BookingData);
  const [book, setBook] = useState(null);

  let searchResult = "";

  const search = searchVal => {
    searchResult = BookingData.filter(person => checkPerson(person, searchVal));
    setBooking(searchResult);
    // console.log(searchResult);
  };

  //this function checks if the word matches name or surname of the person.
  function checkPerson(person, searchVal) {
    let firstName = person.firstName.toLowerCase();
    let surName = person.surname.toLowerCase();
    if (firstName.includes(searchVal) || surName.includes(searchVal))
      return true;
    else return false;
  }

  useEffect(() => {
    // fetch(`https://cyf-react.glitch.me/delayed`)
    fetch("https://cyf-react.glitch.me/error")
      .then(response => {
        if (response.status === 500) {
          alert("error Loading data");
        }
        response.json();
      })
      .then(data => {
        setBook(data);
        console.log("hahahhahh I worked");
      });
    // .catch(err => alert(err))
  }, []);

  return (
    <div>
      {book ? (
        <div className="App-content">
          <div className="container">
            <Search search={search} />

            {searchResult ? (
              <SearchResults BookingData={searchResult} />
            ) : (
              <SearchResults BookingData={Booking} />
            )}
          </div>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default Bookings;

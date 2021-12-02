import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./Components/SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json"; // local data

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = searchVal => {
    searchVal = searchVal.toLowerCase().trim(); //sanitize the users input
    // loop through every element and if the firstName or surname doesn't match the users input then hide that element.
    bookings.forEach(person => {
      const elementToHide = document.getElementById(String(person.id));
      if (
        person.firstName.toLowerCase().includes(searchVal) ||
        person.surname.toLowerCase().includes(searchVal)
      )
        elementToHide.style.display = "";
      else elementToHide.style.display = "none";
    });
  };

  // useEffect(() => {
  //   fetch("https://cyf-react.glitch.me")
  //     .then((response) => {
  //       console.log("API was called"); // making sure I know when the API is called
  //       return response.json();
  //     })
  //     .then((data) => setBookings(data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

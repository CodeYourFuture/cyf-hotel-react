import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./Components/SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [dataLoadedCorrectly, setDataLoadedCorrectly] = useState();

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

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        console.log("Bookings API was called"); // making sure I know when the API is called
        if (response.ok) return response.json();
        else throw new Error("Something went wrong");
      })
      .then(data => setBookings(data))
      .catch(error => {
        setDataLoadedCorrectly(false);
        console.log(error);
      });
  }, []);

  // if the bookings.length === 0 that means we haven't updated the state yet. An empty array is a truthy value which is why we need to check the length
  return bookings.length > 0 ? (
    <div>
      <div className="container-fluid text-center ">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  ) : dataLoadedCorrectly === false ? (
    <div className="text-center display-5 mb-5">
      This is weird, something went wrong. Please try again later.
    </div>
  ) : (
    <div className="text-center display-5 mb-5">
      Loading data, please wait...
    </div>
  );
};

export default Bookings;

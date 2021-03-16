import React from "react";
import Search from "./Search.js";
import SearchResults from "../src/Components/SearchResults/SearchResults";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
// import classes from "./";

const Bookings = props => {
  const tableTitle = [
    "ID",
    "Title",
    "First Name",
    "Surname",
    "Email",
    "Room ID",
    "Check in date",
    "Check out date",
    "No. of nights"
  ];

  const [bookingsData, bookingHandler] = React.useState(props.bookingData);
  const [searchingValue, searchHandler] = React.useState(bookingsData);

  const searchHandlerEvent = e => {
    e.preventDefault();
    const query = document.querySelector("#customerName");
    const copy = [...bookingsData];
    console.log(query.value);
    console.log(bookingsData);
    console.log(copy);

    if (query.value === "") searchHandler(copy);
    const found = copy.filter(item => {
      if (
        item.firstName.toLowerCase().includes(query.value.toLowerCase()) ||
        item.surname.toLowerCase().includes(query.value.toLowerCase())
      ) {
        return item;
      }
    });

    if (found === undefined) return;
    query.innerHTML = "";
    console.log(found);
    return searchHandler(found);
  };
  // search = { search };
  return (
    <div className="App-content">
      <div className="container">
        <Search searchFunction={searchHandlerEvent} />
        <SearchResults fakeBooking={searchingValue} tableHeader={tableTitle} />
      </div>
    </div>
  );
};

export default Bookings;

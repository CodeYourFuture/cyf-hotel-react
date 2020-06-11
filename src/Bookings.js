import React, { useState, useEffect } from "react"; //imported useState and useEffect
import Search from "./Search.js";
import SearchResults from "./SearchResults";
// import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]); // created the state hook passing booking and setBookings functions give it empty array.

  useEffect(() => {
    // useEffect function
    fetch(`https://cyf-react.illicitonion.com/`) // fetched the booking data
      .then(Response => Response.json())
      .then(data => setBookings(data))
      .catch(err => console.log(err)); // error handing
  }, []); // square bracket will prevent fetch infinite loop by react

  /*search implemented */
  const search = searchVal => {
    // function search result
    const filteredResult = bookings.filter(el => {
      //filters the booking
      return (
        el.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        el.surname.toLowerCase().includes(searchVal.toLowerCase())
      ); // return the customer based on search
    });

    setBookings(filteredResult); //calls the function to filter the bookings
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search result={search} search={search} />
        <SearchResults guestList={bookings} />
        {/*replaced the fake booking with bookings */}
        {/* <SearchResults results={FakeBookings} /> which displays the table*/}
      </div>
    </div>
  );
};

export default Bookings;

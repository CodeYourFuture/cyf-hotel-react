import React, { useState, useEffect } from "react"; //imported useState and useEffect
import Search from "./Search.js";
import SearchResults from "./SearchResults";
// import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]); // created the state hook passing booking and setBookings functions give it empty array.

  useEffect(() => {
    // useEffect function
    fetch(`https://cyf-react.glitch.me`) // fetched the booking data
      .then(Response => Response.json())
      .then(data => setBookings(data))
      .catch(err => console.log(err)); // error handing
  }, []); // square bracket will prevent fetch infinite loop by react

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    console.log(searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults guestList={bookings} />
        {/*replaced the fake booking with bookings */}
        {/* <SearchResults results={FakeBookings} /> which displays the table*/}
      </div>
    </div>
  );
};

export default Bookings;

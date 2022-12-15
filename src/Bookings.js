import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  // const [bookings, setBookings] = useState(FakeBookings);
  const [bookings, setBookings] = useState([]);
  const [booksStatus, setBooksStatus] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(data => data.json())
      .then(data => {
        setBooksStatus(true);
        setBookings(data);
      })
      .catch(error => console.log(error));
  }, []);

  const search = searchVal => {
    let newbookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
    );
    setBookings(newbookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        {booksStatus ? <SearchResults results={bookings} /> : "Loading"}
      </div>
    </div>
  );
};

export default Bookings;

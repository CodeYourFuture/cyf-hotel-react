import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const search = searchVal => {
    setBookings(
      bookings.filter(booking => {
        return `${booking.firstName} ${booking.surname}`
          .toLocaleLowerCase()
          .includes(searchVal.toLowerCase());
      })
    );
  };
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      })
      .catch(error => {
        console.log("The error is " + error);
      }); //Use "catch" and "console.error"
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults FakeBookings={bookings} />
      </div>
    </div>
  );
};
export default Bookings;

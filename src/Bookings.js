import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    const filterBookings = bookings.filter(name => {
      return (
        name.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        name.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(filterBookings);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  // const filteredBookings = () => {
  //   if (search) {
  //     setBookings(bookings.filter(function (el) {
  //       return (el.firstName.toLowerCase().includes(search.toLowerCase()) ||
  //         el.surname.toLowerCase().includes(search.toLowerCase()))
  //     }))
  //   } else {
  //     return bookings;
  //   }
  //}

  console.log(search);
  return bookings ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default Bookings;

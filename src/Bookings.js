import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);
  const [hasError, setHasError] = useState(false);

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
    fetch(`https://cyf-react.glitch.me/error`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          setHasError(true);
        }
      })
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
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
      </div>
      {hasError ? (
        <div> ops.. something has gone wrong... </div>
      ) : bookings ? (
        <SearchResults results={bookings} />
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Bookings;

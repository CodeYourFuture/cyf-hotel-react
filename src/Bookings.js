import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults";
import AddBooking from "./components/AddBooking.js";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);

  const search = searchVal => {
    //console.info("TO DO!", searchVal);
    //console.log(bookings);
    setBookings(
      bookings.filter(({ firstName, surname }) => {
        return firstName.includes(searchVal) || surname.includes(searchVal);
      })
      //TODO: after first, search can get only filtered users not all users
    );
  };

  useEffect(() => {
    const apiArr = [
      "https://cyf-react.glitch.me/error",
      "https://cyf-react.glitch.me/delayed",
      "https://cyf-react.glitch.me"
    ];

    let iter = 6;
    let randomIndex = 0;
    do {
      randomIndex = Math.floor(Math.random() * apiArr.length);
      iter--;
    } while (iter > 0 && randomIndex !== 2);

    fetch(apiArr[randomIndex])
      .then(response => {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        setBookings(data);
        console.log(data);
      })
      .catch(err => setBookings(`HTTP ${err}`));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings ? (
          bookings.includes("HTTP") ? (
            <div>{bookings}</div>
          ) : (
            <SearchResults results={bookings} />
          )
        ) : (
          <div>Loading..</div>
        )}
      </div>
      <AddBooking
        addNewCustomer={item => {
          setBookings(bookings.concat(item));
        }}
      />
    </div>
  );
};

export default Bookings;

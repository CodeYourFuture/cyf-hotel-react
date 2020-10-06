import React, { useEffect, useState } from "react";
import NewCustomer from "./NewCustomer.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [sortDirection, setSortDirection] = useState(-1);
  const search = searchVal => {
    setBookings(
      bookings.filter(
        item =>
          item.firstName.toLowerCase() === searchVal.toLowerCase() ||
          item.surname.toLowerCase() === searchVal.toLowerCase()
      )
    );
  };
  useEffect(() => {
    // fetch("https://cyf-react.glitch.me/error")
    fetch("https://cyf-react.glitch.me")
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        setBookings(data);
      });
  }, []);

  const addCustomer = newCustomer => {
    setBookings(bookings.concat(newCustomer));
  };

  const sortBookings = name => {
    if (name === "id") {
      setBookings(
        bookings
          .sort((a, b) => {
            if (a.id > b.id) {
              return 1 * sortDirection;
            } else if (a.id < b.id) {
              return -1 * sortDirection;
            }
            return 0;
          })
          .slice()
      );
    } else if (name === "Title") {
      setBookings(
        bookings
          .sort((a, b) => {
            if (a.title > b.title) {
              return 1 * sortDirection;
            } else if (a.title < b.title) {
              return -1 * sortDirection;
            }
            return 0;
          })
          .slice()
      );
    } else if (name === "First name") {
      setBookings(
        bookings
          .sort((a, b) => {
            if (a.firstName > b.firstName) {
              return 1 * sortDirection;
            } else if (a.firstName < b.firstName) {
              return -1 * sortDirection;
            }
            return 0;
          })
          .slice()
      );
    } else if (name === "Surname") {
      setBookings(
        bookings
          .sort((a, b) => {
            if (a.surname > b.surname) {
              return 1 * sortDirection;
            } else if (a.surname < b.surname) {
              return -1 * sortDirection;
            }
            return 0;
          })
          .slice()
      );
    } else if (name === "Email") {
      setBookings(
        bookings
          .sort((a, b) => {
            if (a.email > b.email) {
              return 1 * sortDirection;
            } else if (a.email < b.email) {
              return -1 * sortDirection;
            }
            return 0;
          })
          .slice()
      );
    } else if (name === "Room id") {
      setBookings(
        bookings
          .sort((a, b) => {
            if (a.roomId > b.roomId) {
              return 1 * sortDirection;
            } else if (a.roomId < b.roomId) {
              return -1 * sortDirection;
            }
            return 0;
          })
          .slice()
      );
    } else if (name === "Check in date") {
      setBookings(
        bookings
          .sort((a, b) => {
            if (a.checkInDate > b.checkInDate) {
              return 1 * sortDirection;
            } else if (a.checkInDate < b.checkInDate) {
              return -1 * sortDirection;
            }
            return 0;
          })
          .slice()
      );
    } else if (name === "Check out date") {
      setBookings(
        bookings
          .sort((a, b) => {
            if (a.checkOutDate > b.checkOutDate) {
              return 1 * sortDirection;
            } else if (a.checkOutDate < b.checkOutDate) {
              return -1 * sortDirection;
            }
            return 0;
          })
          .slice()
      );
    }
    setSortDirection(sortDirection === 1 ? -1 : 1);
  };

  if (bookings.error) {
    return <div>Error: {bookings.error}</div>;
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <NewCustomer addCustomer={addCustomer} />
          <Search search={search} />
          <SearchResults results={bookings} sortBookings={sortBookings} />
        </div>
      </div>
    );
  }
};

export default Bookings;

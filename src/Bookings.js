import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = props => {
  const [bookings, setBookings] = useState([]);

  const [newBookings, setNewBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const search = searchVal => {
    console.info("TO DO!", searchVal);

    const searchedPerson = bookings.filter(
      person =>
        person.firstName.toLowerCase() === searchVal.toLowerCase() ||
        person.surname.toLowerCase() === searchVal.toLowerCase()
    );

    setBookings(searchedPerson);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            `Encountered something unexpected: ${response.status}`
          );
        }
      })
      .then(
        data => {
          setBookings(data);
          if (props.newBooking)
            setNewBookings(newBookings.concat(props.newBooking));
          setLoading(false);
        },
        error => {
          setError(error);
          setLoading(false);
        }
      );
  }, [props.newBooking]);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          results={bookings}
          loading={loading}
          error={error}
          addedBooking={newBookings}
        />
      </div>
    </div>
  );
};

export default Bookings;

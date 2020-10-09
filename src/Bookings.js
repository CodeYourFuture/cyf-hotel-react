import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error(
            `Your error is: ${response.status} ${response.statusText}`
          );
        }
      })
      .then(data => setBookings(data))
      .catch(error => console.error(error));
  }, []);

  const search = searchVal => {
    let newData = bookings.filter(
      person =>
        person.firstName.toUpperCase() === searchVal.toUpperCase().trim() ||
        person.surname.toUpperCase() === searchVal.toUpperCase().trim()
    );
    setBookings(newData);
    console.log(newData);
    console.info("TO DO!", searchVal);
  };

  function getId(userId) {
    setId(userId);
    // id(id)
    console.log("my id is", id);
  }

  if (bookings.length > 0) {
    return (
      <div className="App-content">
        <div className="container">
          <Search searchResults={search} />
        </div>
        <div>
          <SearchResults getId={getId} data={bookings} id={id} />
        </div>
      </div>
    );
  } else {
    return <h1>Loading!</h1>;
  }
};

export default Bookings;

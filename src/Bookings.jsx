import React, { useState, useEffect } from "react";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";
import NewBooking from "./NewBooking";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [id, setID] = useState();


  const filteredBookings = bookings.filter(
    (person) =>
      person.firstName.includes(searchInput) ||
      person.surname.includes(searchInput)
  );

  function addBooking(newBooking) {
    const newData = bookings.concat(newBooking);
    setBookings(newData);
  }

  // https://raw.githubusercontent.com/CodeYourFuture/cyf-hotel-react/master/src/data/fakeBookings.json - previous api link
  //https://cyf-react.glitch.me/error - error link
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setBookings(data);
        setIsLoading(true);
      })
      .catch((error) => {
        console.log(error + "in file Bookings.jsx");
        setError(error);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search setSearchInput={setSearchInput} searchInput={searchInput} />
        {isLoading === false && error === null ? (
          <p>Data is loading...</p>
        ) : (
          <p></p>
        )}
        {error !== null ? (
          <p>
            We are sorry, it is not possible to download data right now. Please
            try again later{" "}
          </p>
        ) : (
          <p></p>
        )}
        <SearchResults results={filteredBookings} id={id} setID={setID} />
      </div>
      <NewBooking addBooking={addBooking} />
    </div>
  );
};

export default Bookings;

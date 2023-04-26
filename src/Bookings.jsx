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
  console.log(bookings);

  const filteredBookings = bookings.filter(
    (person) =>
      person?.firstName?.includes(searchInput) ||
      person?.surname?.includes(searchInput)
  );

  let updatedBookingsResponse = [];

  async function addBooking(newBooking) {
    const newData = bookings.concat(newBooking);
    setBookings(newData);
    // console.log(newBooking);

    const response = await fetch("http://localhost:3001/bookings", {
      method: "POST",
      body: JSON.stringify(newBooking),
      headers: {
        "Content-Type": "application/json",
      },
    });

    updatedBookingsResponse = (await fetch("http://localhost:3001/bookings"))
      .body;

    // fetch("http://localhost:3001/bookings")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("HTTP error, status = " + response.status);
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     // setBookings(data.bookings);
    //     // setIsLoading(true);
    //   })
    //   .catch((error) => {
    //     console.log(error + "in file Bookings.jsx");
    //     // setError(error);
    //   });

    // setBookings(updatedBookingsResponse.body.bookings);

    return response.json(); // parses JSON response into native JavaScript objects
  }

  useEffect(() => {
    fetch("https://nataliiazab-hotel-app.onrender.com/bookings")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setBookings(data.bookings);
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
        <SearchResults
          results={filteredBookings}
          id={id}
          setID={setID}
          bookings={bookings}
        />
      </div>
      <NewBooking addBooking={addBooking} />
    </div>
  );
};

export default Bookings;

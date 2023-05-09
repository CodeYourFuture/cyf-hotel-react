import React, { useState, useEffect } from "react";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";
import NewBooking from "./NewBooking";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [latestId, setLatestId] = useState(null);

  const filteredBookings = bookings.filter(
    (person) =>
      person?.firstName?.includes(searchInput) ||
      person?.surname?.includes(searchInput)
  );

  // https://nataliiazab-hotel-app.onrender.com/bookings
  async function addBooking(newBooking) {
    try {
      const response = await fetch(
        "https://nataliiazab-hotel-app.onrender.com/bookings",
        {
          method: "POST",
          body: JSON.stringify({ ...newBooking, id: latestId }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseJson = await response.json();
      const newBookingWithId = { ...newBooking, id: responseJson.id };
      // Update latest ID
      setLatestId(responseJson.id);

      const newData = [...bookings, newBookingWithId];

      setBookings(newData);
    } catch (error) {
      console.log("Error adding new booking:", error);
    }
  }

  /*add try catch*/
  async function removeBooking(id) {
    await fetch(`https://nataliiazab-hotel-app.onrender.com/bookings/${id}`, {
      method: "DELETE",
    });
    const newData = bookings.filter((booking) => booking.id !== id);
    setBookings(newData);
  }


  useEffect(() => {
    setIsLoading(true);
    fetch("https://nataliiazab-hotel-app.onrender.com/bookings")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setBookings(data.bookings);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error + "in file Bookings.jsx");
        setError(error);
      });
  }, [latestId]);

  return (
    <div className="App-content">
      <div className="container">
        <Search setSearchInput={setSearchInput} searchInput={searchInput} />
        {isLoading && <p>Data is loading...</p>}
        {error && (
          <p>
            We are sorry, it is not possible to download data right now. Please
            try again later{" "}
          </p>
        )}
        <SearchResults
          results={filteredBookings}
          bookings={bookings}
          removeBooking={removeBooking}
        />
      </div>
      <NewBooking addBooking={addBooking} />
    </div>
  );
};

export default Bookings;

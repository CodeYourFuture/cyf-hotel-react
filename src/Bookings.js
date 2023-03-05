import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import NewBookingForm from "./NewBookingForm.js";

const Bookings = () => {
  const [bookings, setBookings] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const search = (searchVal) => {
    if (searchVal === "") return;
    const newGuestLists = bookings.filter((guest) => {
      if (
        guest.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        guest.surname.toLowerCase().includes(searchVal.toLowerCase())
      ) {
        return guest;
      }
    });
    setBookings(newGuestLists);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        let response = await fetch("https://cyf-react.glitch.me/");

        if (response.status >= 400 && response.status < 600) {
          throw new Error("Bad response from server");
        } else {
          let data = await response.json();
          setBookings(data);
          setIsLoading(false);
        }
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} guests={bookings} resetBooking={setBookings} />
        <SearchResults results={bookings} />
        {isLoading ? <p>Please wait for loading data...</p> : null}
        {error !== "" ? (
          <p>{`We cannot load the page because an error has occurred.  ${error}. Please fix the error and try one more time.`}</p>
        ) : null}
        <NewBookingForm bookingsList={bookings} addNewBooking={setBookings} />
      </div>
    </div>
  );
};

export default Bookings;

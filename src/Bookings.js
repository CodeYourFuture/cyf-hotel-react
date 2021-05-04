import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import NewBooking from "./NewBooking";
import "./Booking.css";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBooking = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBooking);
  };

  const addNewBooking = newBooking => {
    const id = bookings.length + 1;
    setBookings([...bookings, { id, ...newBooking }]);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          throw data;
        }
        setBookings(data);

        setLoading(false);
      })
      .catch(error => setErrorMessage(error));
    return <p>You have an error</p>;
    //console.log("500 HTTP error");
  }, []);

  if (loading && !errorMessage) {
    return <p className="loading ">Please wait , System Loading...</p>;
  } else if (errorMessage == null) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          {/* <SearchResults results={FakeBookings} /> */}
          <SearchResults results={bookings} />

          <NewBooking getNewBooking={addNewBooking} />
        </div>
      </div>
    );
  } else {
    return <div>{errorMessage.error}</div>;
  }
};

export default Bookings;

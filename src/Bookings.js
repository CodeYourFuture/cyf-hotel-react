import React, { useState, useEffect } from "react";
//import "./Bookings.css";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import BookingForm from "./BookingForm.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newBooking, setNewBooking] = useState({
    id: null,
    firstName: "",
    surname: "",
    email: "",
    roomId: null,
    checkInDate: "",
    checkOutDate: ""
  });

  useEffect(() => {
    fetch("https://nawal-hotel-server.glitch.me/bookings")
      //    fetch("https://cyf-react.glitch.me/delayed")
      //fetch("https://cyf-react.glitch.me/error")
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          throw data;
        }
        console.log(data);
        setBookings(data);
        setLoading(false);
      })
      .catch(error => setError(error));
    console.log("500 HTTP error");
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBooking = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBooking);
  };

  const addCustomer = customer => {
    fetch("https://nawal-hotel-server.glitch.me/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: newBooking.firstName,
        surname: newBooking.surname,
        email: newBooking.email,
        roomId: newBooking.roomId,
        checkInDate: newBooking.checkInDate,
        checkOutDate: newBooking.checkOutDate
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    customer.id = bookings.length + 1;
    setBookings([...bookings, customer]);
  };

  if (loading && !error) {
    return <div> Loading...</div>;
  }
  if (error == null) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
          <div>
            <BookingForm
              addCustomer={addCustomer}
              newBooking={newBooking}
              setNewBooking={setNewBooking}
            />
          </div>
        </div>
      </div>
    );
  } else {
    console.log(error);
    return <div>{error.error}</div>;
  }
};
export default Bookings;

import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "/Users/test/Documents/CYF/react/cyf-hotel-react/src/data/fakeBookings.json";
import NewCustomerForm from "./NewCustomerForm.js";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const search = searchVal => {
    let filteredBooking = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal) ||
        booking.surname.toLowerCase().includes(searchVal)
    );
    setBookings(filteredBooking);
  };

  function handleAddNewBooking(name, lastName) {
    const newCustomer = {
      id: 6,
      title: "Madam",
      firstName: name,
      surname: lastName,
      email: "anu@selvam.net",
      roomId: 3,
      checkInDate: "2017-08-30",
      checkOutDate: "2017-10-02"
    };
    setBookings(bookings.concat(newCustomer));
  }

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("An error occurred...");
        }
      })
      .catch(error => setError(true))
      .then(data => {
        setBookings(data);
        setLoading(false);
      });
  }, []);

  let bookingsSection;
  if (loading) {
    bookingsSection = <span id="bookingLoading">Bookings loading...</span>;
  } else if (error) {
    bookingsSection = <span id="bookingError">An error has occurred...</span>;
  } else {
    bookingsSection = <SearchResults bookings={bookings} />;
  }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <NewCustomerForm handleAddNewBooking={handleAddNewBooking} />
        {bookingsSection}
      </div>
    </div>
  );
};

export default Bookings;

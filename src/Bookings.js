import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import AddCustomerForm from "./AddCustomerForm";

const Bookings = () => {
  const [Booking, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(loading);
  console.log(Booking);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      });
  }, []);

  console.log(loading);
  console.log(Booking);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const filteredBooking = Booking.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal) ||
        booking.surname.toLowerCase().includes(searchVal)
    );

    setBookings(filteredBooking);
  };

  const addCustomer = customer => {
    customer.id = Booking.length + 1;
    console.log("customer id", customer.id);
    setBookings([...Booking, customer]);
  };
  return (
    <div>
      <div className="App-content">
        <div className="container">
          <Search search={search} />
        </div>
        {loading ? (
          <div>
            <p>Data is loading...</p>
          </div>
        ) : (
          <div>
            <SearchResults results={Booking} />
          </div>
        )}
        <div>
          <AddCustomerForm addCustomer={addCustomer} />
        </div>
      </div>
    </div>
  );
};
export default Bookings;

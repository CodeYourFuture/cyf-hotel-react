import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import AddCustomerForm from "./AddCustomerForm";
import "./Bookings.css";

const Bookings = () => {
  const [Booking, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(loading);
  console.log(Booking);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw data;
        }

        setBookings(data);
        setLoading(false);
      })
      .catch(error => setError(error));
    console.log(error);
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
    <div className="App-content" className="App-content">
      <div>
        {loading ? (
          <div>
            <p>Data is loading...</p>
          </div>
        ) : (
          <div>
            <SearchResults results={Booking} />
          </div>
        )}
      </div>
      <div className="container">
        <Search search={search} />
      </div>
      <div>
        <AddCustomerForm addCustomer={addCustomer} />
      </div>
    </div>
  );
};
export default Bookings;

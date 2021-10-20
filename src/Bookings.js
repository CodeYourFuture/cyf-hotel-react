import React, { useState, useEffect } from "react";
import Search from "./Search.js";
// import SearchButton from "./SearchButton.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";
import Loader from "react-loader-spinner";

const Bookings = () => {
  const [booking, setBooking] = useState([]);
  const [customerId, setCustomerId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    let searchQuery = searchVal.toLowerCase();
    let filtered = booking.filter(data => {
      if (
        data.firstName.toLowerCase() === searchQuery ||
        data.surname.toLowerCase() === searchQuery
      ) {
        return data;
      }
    });
    setBooking(filtered);
  };

  const receiveCustomerId = id => {
    setCustomerId(id);
  };

  useEffect(() => {
    // console.log("Fetch Data Remotely");

    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(setIsLoading(true))
      .then(res => res.json())
      .then(bookingData => {
        setBooking(bookingData);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App-content">
      {isLoading ? (
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      ) : (
        <div className="container">
          <Search search={search} />
          {/* <SearchResults /> */}
          <SearchResults results={booking} setCustomerId={receiveCustomerId} />
          <CustomerProfile id={customerId} />
        </div>
      )}
    </div>
  );
};

export default Bookings;

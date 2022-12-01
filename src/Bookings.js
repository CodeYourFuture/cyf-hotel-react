import React, { useState, useEffect } from "react";
//import { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = props => {
  const [error, setError] = useState(false);
  //https://cyf-react.glitch.me/error : i have used this API to check the error message after the fetch is executed
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setError(true);
        }
      })
      .then(data => {
        const receivedData = data;
        if (props.newBooking) {
          receivedData.push(props.newBooking);
        }
        setBooking(receivedData);
      })
      .catch(error => console.log(`Error received: ${error}`));
  }, [props.newBooking]);

  const search = searchVal => {
    //console.info("TO DO!", searchVal);
    bookings.forEach(person => {
      if (
        person.firstName === searchVal.toLowerCase() ||
        person.surname === searchVal.toLowerCase() ||
        person.firstName.toLowerCase() === searchVal.toLowerCase() ||
        person.surname.toLowerCase() === searchVal.toLowerCase()
      ) {
        setBooking([person]);
      }
    });
  };

  const [bookings, setBooking] = useState([]);
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [customerProfile, setCustomerProfile] = useState({});
  const buttonClicked = e => {
    setSelectedProfileId(e.target.value);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBooking(data));
  }, []);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${selectedProfileId}`)
      .then(res => res.json())
      .then(data => setCustomerProfile(data));
  }, [selectedProfileId]);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {error ? (
          <p>Encountered Something</p>
        ) : bookings.length === 0 ? (
          <p>Please Wait...</p>
        ) : (
          <SearchResults results={bookings} buttonClicked={buttonClicked} />
        )}
        ;
        <CustomerProfile
          selectedProfileId={selectedProfileId}
          customerProfile={customerProfile}
        />
      </div>
    </div>
  );
};

export default Bookings;

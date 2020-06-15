import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [customerId, setCustomerID] = useState("");
  const [counterID, setCounterId] = useState("");
  useEffect(() => {
    fetch("https://cyf-react.illicitonion.com")
      .then(respose => respose.json())
      .then(data => {
        setBookingData(data);
        setBookings(data);
        let ids = [];
        data.forEach(element => {
          ids.push(element.id);
        });
        setCustomerID(ids);
        setCounterId(0);
      })
      .catch(err => setErrorMessage(err));
  }, []);

  useEffect(() => {
    if (customerId !== "" && counterID < customerId.length) {
      fetch(
        `https://cyf-react.illicitonion.com/customers/${customerId[counterID]}`
      )
        .then(results => results.json())
        .then(data => {
          let customer = bookingData;
          customer[counterID].phoneNumber = data.phoneNumber;
          customer[counterID].vip = data.vip;
          setBookingData(customer);
          setBookings(customer);
          let i = counterID + 1;
          setCounterId(i);
          console.log("1");
        });
    }
  }, [counterID]);
  const search = searchVal => {
    let result =
      searchVal !== ""
        ? bookingData.filter(
            element =>
              element.firstName.toLowerCase().indexOf(searchVal.toLowerCase()) >
                -1 ||
              element.surname.toLowerCase().indexOf(searchVal.toLowerCase()) >
                -1
          )
        : bookingData;
    setBookings(result);
  };
  const addCustomer = newCustomer => {
    let newData = [...bookingData, newCustomer];
    setBookings(newData);
    setBookingData(newData);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings.length > 0 ? (
          <SearchResults results={bookings} addCustomer_F={addCustomer} />
        ) : errorMessage === "" ? (
          <p className="P_Loading_CSS"> Loading . . . </p>
        ) : (
          <p className="P_Loading_CSS"> {errorMessage} </p>
        )}
      </div>
    </div>
  );
};

export default Bookings;

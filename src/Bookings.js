import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import NewBookingForm from "./NewBookingForm.js";
import FakeBookings from "./data/fakeBookings.json";

function Bookings() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [typedSearchValues, setTypedSearchValues] = useState([]);
  
  const search = (searchVal) => {
    setTypedSearchValues(searchVal);
  };

  function addNewBooking(newBooking){
    setBookings([...bookings, newBooking])
  }

  const filteredBookings = bookings.filter((customerName) => {
    return (
      customerName.firstName.toLowerCase().includes(typedSearchValues) ||
      customerName.surname.toLowerCase().includes(typedSearchValues)
    );
  });

  useEffect(() => {
    fetch("https://temporary-cyf-react.onrender.com")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.error) {
          setErrorMessage(data.error);
        } else {
          setBookings(data);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.log("Your requested infomation is not currently available!");
      });
  }, []);

  return (
    <div className="App-content">
      {loading ? (
        <p>Please wait while we fetch the info requested</p>
      ) : (
        <div>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            <div className="container">
              <NewBookingForm addNewBooking={addNewBooking}bookings={bookings}/>
              <Search search={search} />
              <SearchResults bookingResults={filteredBookings} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Bookings;

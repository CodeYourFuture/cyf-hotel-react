import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";
import NewBookingForm from "./NewBookingForm.js";

const Bookings = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = (searchVal) => {
    setSearchValue(searchVal);
    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
   console.log("using API for data");
    setLoading(true);

    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.error);
        } else {
          setBookings(data);
        }
        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [setBookings]);

  const onCreateNewBooking = (booking) => {

    try {
      fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(booking)
    })
    } catch(error) {
      console.log(error)
    }
    
  };

  const filterBookings = bookings.filter(
    (booking) =>
      booking.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      booking.surname.toLowerCase().includes(searchValue.toLowerCase())
  );

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
              <NewBookingForm onSubmit={onCreateNewBooking} />
              <Search search={searchValue} setSearch={onSearch} />
              <SearchResults
                results={searchValue ? filterBookings : bookings}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Bookings;
